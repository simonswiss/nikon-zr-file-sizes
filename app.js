// Nikon ZR Storage Calculator

let chart = null;
let chartMode = 'by-mode'; // 'by-mode' or 'by-codec'

// DOM Elements
const storageSelect = document.getElementById('storage');
const codecSelect = document.getElementById('codec');
const resolutionSelect = document.getElementById('resolution');
const resultTime = document.getElementById('result-time');
const resultDatarate = document.getElementById('result-datarate');
const resultPerminute = document.getElementById('result-perminute');
const btnByMode = document.getElementById('btn-by-mode');
const btnByCodec = document.getElementById('btn-by-codec');

// Colors for codecs
const CODEC_COLORS = {
    'r3d-ne': '#dc3545',
    'n-raw-high': '#fd7e14',
    'n-raw-normal': '#e67e22',
    'prores-raw-hq': '#0d6efd',
    'prores-422-hq': '#20c997',
    'h265-10bit': '#6f42c1',
    'h265-8bit': '#d63384',
    'h264': '#198754'
};

function init() {
    populateResolutionOptions();
    updateResults();
    createChart();

    storageSelect.addEventListener('change', handleChange);
    codecSelect.addEventListener('change', () => {
        populateResolutionOptions();
        handleChange();
    });
    resolutionSelect.addEventListener('change', handleChange);

    btnByMode.addEventListener('click', () => setChartMode('by-mode'));
    btnByCodec.addEventListener('click', () => setChartMode('by-codec'));
}

function populateResolutionOptions() {
    const codec = codecSelect.value;
    const modes = RECORDING_MODES[codec].modes;

    resolutionSelect.innerHTML = '';
    modes.forEach((mode, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = mode.label;
        resolutionSelect.appendChild(option);
    });
}

function handleChange() {
    updateResults();
    updateChart();
}

function updateResults() {
    const storageGB = parseInt(storageSelect.value);
    const codec = codecSelect.value;
    const modeIndex = parseInt(resolutionSelect.value);
    const mode = RECORDING_MODES[codec].modes[modeIndex];
    const minutes = calculateRecordingTime(storageGB, mode.dataRate);

    resultTime.textContent = formatTimeDetailed(minutes);
    resultDatarate.textContent = `${mode.dataRate} MB/s`;
    resultPerminute.textContent = `${(mode.dataRate * 60 / 1024).toFixed(1)} GB`;
}

function setChartMode(mode) {
    chartMode = mode;
    btnByMode.classList.toggle('active', mode === 'by-mode');
    btnByCodec.classList.toggle('active', mode === 'by-codec');
    updateChart();
}

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
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#333',
                    bodyColor: '#666',
                    borderColor: '#ddd',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        label: (ctx) => ` ${formatTimeDetailed(ctx.raw)}`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: '#f0f0f0' },
                    ticks: {
                        color: '#666',
                        callback: (val) => formatTime(val)
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: '#333' }
                }
            }
        }
    });
}

function getChartData() {
    const storageGB = parseInt(storageSelect.value);
    const selectedCodec = codecSelect.value;
    const selectedModeIndex = parseInt(resolutionSelect.value);
    const selectedMode = RECORDING_MODES[selectedCodec].modes[selectedModeIndex];

    if (chartMode === 'by-mode') {
        // Show all modes for the selected codec
        const codec = RECORDING_MODES[selectedCodec];
        const labels = codec.modes.map(m => m.label);
        const data = codec.modes.map(m => calculateRecordingTime(storageGB, m.dataRate));
        const colors = codec.modes.map((m, i) =>
            i === selectedModeIndex ? CODEC_COLORS[selectedCodec] : '#ddd'
        );

        return {
            labels,
            datasets: [{
                data,
                backgroundColor: colors,
                borderRadius: 4,
                barThickness: 20
            }]
        };
    } else {
        // Show same resolution/fps across all codecs that support it
        const targetLabel = selectedMode.label;
        const labels = [];
        const data = [];
        const colors = [];

        Object.keys(RECORDING_MODES).forEach(codecKey => {
            const codec = RECORDING_MODES[codecKey];
            const matchingMode = codec.modes.find(m => m.label === targetLabel);
            if (matchingMode) {
                labels.push(codec.shortName);
                data.push(calculateRecordingTime(storageGB, matchingMode.dataRate));
                colors.push(codecKey === selectedCodec ? CODEC_COLORS[codecKey] : '#ddd');
            }
        });

        return {
            labels,
            datasets: [{
                data,
                backgroundColor: colors,
                borderRadius: 4,
                barThickness: 28
            }]
        };
    }
}

function updateChart() {
    if (chart) {
        chart.data = getChartData();
        chart.update('none');
    }
}

document.addEventListener('DOMContentLoaded', init);
