// Nikon ZR Recording Modes Data
// Data rates in MB/s (megabytes per second)
//
// SOURCES:
// - Official specs: https://www.nikonusa.com/p/zr/2006/overview
// - 6K 60p ~540 MB/s derived from 325GB = 10 min (REDUSER.NET)
// - 6K 24p ~200 MB/s reported by Newsshooter
// - Other rates are estimated based on resolution/fps ratios
//
// NOTE: Data rates are ESTIMATES. Actual rates vary based on scene complexity.
// REDCODE/R3D is a variable bitrate codec.

const RECORDING_MODES = {
    'r3d-ne': {
        name: 'R3D NE (12-bit RAW)',
        shortName: 'R3D NE',
        color: '#ff4444',
        modes: [
            // 6K Full Frame - up to 59.94p
            { resolution: '6K', fps: 59.94, width: 6048, height: 3402, dataRate: 540, label: '6K 59.94p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 450, label: '6K 50p' },
            { resolution: '6K', fps: 29.97, width: 6048, height: 3402, dataRate: 270, label: '6K 29.97p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 225, label: '6K 25p' },
            { resolution: '6K', fps: 23.976, width: 6048, height: 3402, dataRate: 200, label: '6K 23.976p' },
            // 4K DX Crop - up to 119.88p
            { resolution: '4K DX', fps: 119.88, width: 3984, height: 2240, dataRate: 480, label: '4K 119.88p (DX)' },
            // 4K Full Frame - up to 59.94p
            { resolution: '4K', fps: 59.94, width: 4030, height: 2268, dataRate: 240, label: '4K 59.94p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 200, label: '4K 50p' },
            { resolution: '4K', fps: 29.97, width: 4030, height: 2268, dataRate: 120, label: '4K 29.97p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 100, label: '4K 25p' },
            { resolution: '4K', fps: 23.976, width: 4030, height: 2268, dataRate: 96, label: '4K 23.976p' }
        ]
    },
    'n-raw': {
        name: 'N-RAW (12-bit)',
        shortName: 'N-RAW',
        color: '#ffaa00',
        modes: [
            // 6K Full Frame - up to 59.94p
            { resolution: '6K', fps: 59.94, width: 6048, height: 3402, dataRate: 580, label: '6K 59.94p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 485, label: '6K 50p' },
            { resolution: '6K', fps: 29.97, width: 6048, height: 3402, dataRate: 290, label: '6K 29.97p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 242, label: '6K 25p' },
            { resolution: '6K', fps: 23.976, width: 6048, height: 3402, dataRate: 232, label: '6K 23.976p' },
            // 4K DX Crop - up to 119.88p
            { resolution: '4K DX', fps: 119.88, width: 3984, height: 2240, dataRate: 520, label: '4K 119.88p (DX)' },
            // 4K Full Frame - up to 59.94p
            { resolution: '4K', fps: 59.94, width: 4030, height: 2268, dataRate: 260, label: '4K 59.94p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 217, label: '4K 50p' },
            { resolution: '4K', fps: 29.97, width: 4030, height: 2268, dataRate: 130, label: '4K 29.97p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 108, label: '4K 25p' },
            { resolution: '4K', fps: 23.976, width: 4030, height: 2268, dataRate: 104, label: '4K 23.976p' }
        ]
    },
    'prores-raw-hq': {
        name: 'ProRes RAW HQ',
        shortName: 'ProRes RAW',
        color: '#44aaff',
        modes: [
            // 6K - up to 29.97p only
            { resolution: '6K', fps: 29.97, width: 6048, height: 3402, dataRate: 380, label: '6K 29.97p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 317, label: '6K 25p' },
            { resolution: '6K', fps: 23.976, width: 6048, height: 3402, dataRate: 304, label: '6K 23.976p' },
            // 4K - up to 59.94p
            { resolution: '4K', fps: 59.94, width: 4030, height: 2268, dataRate: 340, label: '4K 59.94p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 283, label: '4K 50p' },
            { resolution: '4K', fps: 29.97, width: 4030, height: 2268, dataRate: 170, label: '4K 29.97p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 142, label: '4K 25p' },
            { resolution: '4K', fps: 23.976, width: 4030, height: 2268, dataRate: 136, label: '4K 23.976p' }
        ]
    },
    'prores-422-hq': {
        name: 'ProRes 422 HQ',
        shortName: 'ProRes 422',
        color: '#44ddaa',
        modes: [
            // 5.4K - up to 29.97p only
            { resolution: '5.4K', fps: 29.97, width: 5376, height: 3024, dataRate: 235, label: '5.4K 29.97p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 196, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 23.976, width: 5376, height: 3024, dataRate: 188, label: '5.4K 23.976p' },
            // 4K - up to 29.97p
            { resolution: '4K', fps: 29.97, width: 3840, height: 2160, dataRate: 147, label: '4K 29.97p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 122, label: '4K 25p' },
            { resolution: '4K', fps: 23.976, width: 3840, height: 2160, dataRate: 117, label: '4K 23.976p' },
            // 1080p
            { resolution: '1080p', fps: 29.97, width: 1920, height: 1080, dataRate: 37, label: '1080p 29.97p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 31, label: '1080p 25p' },
            { resolution: '1080p', fps: 23.976, width: 1920, height: 1080, dataRate: 29, label: '1080p 23.976p' }
        ]
    },
    'h265-10bit': {
        name: 'H.265 (10-bit)',
        shortName: 'H.265 10-bit',
        color: '#aa44ff',
        modes: [
            // 5.4K - up to 59.94p
            { resolution: '5.4K', fps: 59.94, width: 5376, height: 3024, dataRate: 150, label: '5.4K 59.94p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 125, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 29.97, width: 5376, height: 3024, dataRate: 75, label: '5.4K 29.97p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 62, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 23.976, width: 5376, height: 3024, dataRate: 60, label: '5.4K 23.976p' },
            // 4K - up to 119.88p
            { resolution: '4K', fps: 119.88, width: 3840, height: 2160, dataRate: 200, label: '4K 119.88p' },
            { resolution: '4K', fps: 59.94, width: 3840, height: 2160, dataRate: 100, label: '4K 59.94p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 83, label: '4K 50p' },
            { resolution: '4K', fps: 29.97, width: 3840, height: 2160, dataRate: 50, label: '4K 29.97p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 42, label: '4K 25p' },
            { resolution: '4K', fps: 23.976, width: 3840, height: 2160, dataRate: 40, label: '4K 23.976p' },
            // 1080p - up to 239.76p
            { resolution: '1080p', fps: 239.76, width: 1920, height: 1080, dataRate: 100, label: '1080p 239.76p' },
            { resolution: '1080p', fps: 119.88, width: 1920, height: 1080, dataRate: 50, label: '1080p 119.88p' },
            { resolution: '1080p', fps: 59.94, width: 1920, height: 1080, dataRate: 25, label: '1080p 59.94p' },
            { resolution: '1080p', fps: 29.97, width: 1920, height: 1080, dataRate: 12, label: '1080p 29.97p' }
        ]
    },
    'h265-8bit': {
        name: 'H.265 (8-bit)',
        shortName: 'H.265 8-bit',
        color: '#ff44aa',
        modes: [
            // 5.4K - up to 59.94p
            { resolution: '5.4K', fps: 59.94, width: 5376, height: 3024, dataRate: 120, label: '5.4K 59.94p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 100, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 29.97, width: 5376, height: 3024, dataRate: 60, label: '5.4K 29.97p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 50, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 23.976, width: 5376, height: 3024, dataRate: 48, label: '5.4K 23.976p' },
            // 4K - up to 119.88p
            { resolution: '4K', fps: 119.88, width: 3840, height: 2160, dataRate: 160, label: '4K 119.88p' },
            { resolution: '4K', fps: 59.94, width: 3840, height: 2160, dataRate: 80, label: '4K 59.94p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 67, label: '4K 50p' },
            { resolution: '4K', fps: 29.97, width: 3840, height: 2160, dataRate: 40, label: '4K 29.97p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 33, label: '4K 25p' },
            { resolution: '4K', fps: 23.976, width: 3840, height: 2160, dataRate: 32, label: '4K 23.976p' },
            // 1080p - up to 239.76p
            { resolution: '1080p', fps: 239.76, width: 1920, height: 1080, dataRate: 80, label: '1080p 239.76p' },
            { resolution: '1080p', fps: 119.88, width: 1920, height: 1080, dataRate: 40, label: '1080p 119.88p' },
            { resolution: '1080p', fps: 59.94, width: 1920, height: 1080, dataRate: 20, label: '1080p 59.94p' },
            { resolution: '1080p', fps: 29.97, width: 1920, height: 1080, dataRate: 10, label: '1080p 29.97p' }
        ]
    },
    'h264': {
        name: 'H.264 (8-bit)',
        shortName: 'H.264',
        color: '#88cc44',
        modes: [
            // 4K - up to 59.94p
            { resolution: '4K', fps: 59.94, width: 3840, height: 2160, dataRate: 65, label: '4K 59.94p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 54, label: '4K 50p' },
            { resolution: '4K', fps: 29.97, width: 3840, height: 2160, dataRate: 32, label: '4K 29.97p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 27, label: '4K 25p' },
            { resolution: '4K', fps: 23.976, width: 3840, height: 2160, dataRate: 26, label: '4K 23.976p' },
            // 1080p - up to 119.88p
            { resolution: '1080p', fps: 119.88, width: 1920, height: 1080, dataRate: 32, label: '1080p 119.88p' },
            { resolution: '1080p', fps: 59.94, width: 1920, height: 1080, dataRate: 16, label: '1080p 59.94p' },
            { resolution: '1080p', fps: 29.97, width: 1920, height: 1080, dataRate: 8, label: '1080p 29.97p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 7, label: '1080p 25p' },
            { resolution: '1080p', fps: 23.976, width: 1920, height: 1080, dataRate: 6, label: '1080p 23.976p' }
        ]
    }
};

// Helper function to calculate recording time in minutes
function calculateRecordingTime(storageGB, dataRateMBps) {
    // Convert GB to MB, then divide by data rate (MB/s), then convert seconds to minutes
    const storageMB = storageGB * 1024;
    const recordingSeconds = storageMB / dataRateMBps;
    const recordingMinutes = recordingSeconds / 60;
    return recordingMinutes;
}

// Helper function to format time nicely
function formatTime(minutes) {
    if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const mins = Math.round(minutes % 60);
        if (mins === 0) {
            return `${hours}h`;
        }
        return `${hours}h ${mins}m`;
    }
    return `${Math.round(minutes)}m`;
}

// Helper function to format time with more detail
function formatTimeDetailed(minutes) {
    if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const mins = Math.round(minutes % 60);
        return `${hours} hr ${mins} min`;
    }
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    if (secs > 0 && mins < 10) {
        return `${mins} min ${secs} sec`;
    }
    return `${Math.round(minutes)} min`;
}
