// Nikon ZR Storage Calculator - Main Application

let chart = null;

// DOM Elements
const storageSelect = document.getElementById('storage');
const codecSelect = document.getElementById('codec');
const resolutionSelect = document.getElementById('resolution');
const resultTime = document.getElementById('result-time');
const resultDatarate = document.getElementById('result-datarate');
const resultPerminute = document.getElementById('result-perminute');

// Initialize the app
function init() {
    populateResolutionOptions();
    updateResults();
    createChart();

    // Add event listeners
    storageSelect.addEventListener('change', handleChange);
    codecSelect.addEventListener('change', () => {
        populateResolutionOptions();
        handleChange();
    });
    resolutionSelect.addEventListener('change', handleChange);
}

// Populate resolution options based on selected codec
function populateResolutionOptions() {
    const codec = codecSelect.value;
    const modes = RECORDING_MODES[codec].modes;

    resolutionSelect.innerHTML = '';
    modes.forEach((mode, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${mode.label} (${mode.width}×${mode.height})`;
        resolutionSelect.appendChild(option);
    });
}

// Handle any change in selections
function handleChange() {
    updateResults();
    updateChart();
}

// Update the result card
function updateResults() {
    const storageGB = parseInt(storageSelect.value);
    const codec = codecSelect.value;
    const modeIndex = parseInt(resolutionSelect.value);

    const mode = RECORDING_MODES[codec].modes[modeIndex];
    const recordingMinutes = calculateRecordingTime(storageGB, mode.dataRate);

    resultTime.textContent = formatTimeDetailed(recordingMinutes);
    resultDatarate.textContent = `${mode.dataRate} MB/s`;
    resultPerminute.textContent = `${(mode.dataRate * 60 / 1024).toFixed(2)} GB`;
}

// Create the comparison chart
function createChart() {
    const ctx = document.getElementById('comparisonChart').getContext('2d');

    chart = new Chart(ctx, {
        type: 'bar',
        data: getChartData(),
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#a0a0a0',
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 11
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 30, 60, 0.95)',
                    titleColor: '#ffd700',
                    bodyColor: '#e0e0e0',
                    borderColor: '#3a3a5c',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            return ` ${formatTimeDetailed(value)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#808080',
                        callback: function(value) {
                            return formatTime(value);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Recording Time',
                        color: '#a0a0a0'
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#a0a0a0',
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
}

// Get chart data from all codecs
function getChartData() {
    const storageGB = parseInt(storageSelect.value);
    const selectedCodec = codecSelect.value;
    const selectedModeIndex = parseInt(resolutionSelect.value);

    const datasets = [];
    const labels = new Set();

    // Collect all unique resolution/fps combinations
    Object.keys(RECORDING_MODES).forEach(codecKey => {
        RECORDING_MODES[codecKey].modes.forEach(mode => {
            labels.add(mode.label);
        });
    });

    const sortedLabels = Array.from(labels).sort((a, b) => {
        // Sort by resolution (6K > 5.4K > 4K > 1080p) then by fps (descending)
        const resOrder = { '6K': 0, '5.4K': 1, '4K': 2, '1080p': 3 };
        const [resA, fpsA] = parseLabel(a);
        const [resB, fpsB] = parseLabel(b);

        if (resOrder[resA] !== resOrder[resB]) {
            return resOrder[resA] - resOrder[resB];
        }
        return parseInt(fpsB) - parseInt(fpsA);
    });

    // Create dataset for each codec
    Object.keys(RECORDING_MODES).forEach(codecKey => {
        const codec = RECORDING_MODES[codecKey];
        const data = sortedLabels.map(label => {
            const mode = codec.modes.find(m => m.label === label);
            if (mode) {
                return calculateRecordingTime(storageGB, mode.dataRate);
            }
            return null;
        });

        // Determine if this codec contains the selected mode
        const isSelectedCodec = codecKey === selectedCodec;
        const selectedLabel = RECORDING_MODES[selectedCodec].modes[selectedModeIndex].label;

        datasets.push({
            label: codec.shortName,
            data: data,
            backgroundColor: data.map((val, idx) => {
                if (isSelectedCodec && sortedLabels[idx] === selectedLabel) {
                    return codec.color; // Full color for selected
                }
                return val !== null ? codec.color + '60' : 'transparent'; // Semi-transparent for others
            }),
            borderColor: data.map((val, idx) => {
                if (isSelectedCodec && sortedLabels[idx] === selectedLabel) {
                    return '#ffd700'; // Gold border for selected
                }
                return codec.color;
            }),
            borderWidth: data.map((val, idx) => {
                if (isSelectedCodec && sortedLabels[idx] === selectedLabel) {
                    return 3;
                }
                return 1;
            }),
            borderRadius: 4,
            barPercentage: 0.8,
            categoryPercentage: 0.9
        });
    });

    return {
        labels: sortedLabels,
        datasets: datasets
    };
}

// Parse label to extract resolution and fps
function parseLabel(label) {
    const match = label.match(/^([\d.]+K|1080p)\s+(\d+)p/);
    if (match) {
        return [match[1], match[2]];
    }
    return [label, '0'];
}

// Update chart with new data
function updateChart() {
    if (chart) {
        const newData = getChartData();
        chart.data = newData;
        chart.update('none');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
