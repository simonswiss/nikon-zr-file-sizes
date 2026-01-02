// Nikon ZR Recording Modes Data
// Data rates in MB/s (megabytes per second)
//
// SOURCES:
// - Official Nikon ZR specs: https://www.nikonusa.com/p/zr/2006/overview
// - Nikon ZR Online Manual: https://onlinemanual.nikonimglib.com/zr/en/
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
            // 6K Full Frame (6048×3402) - up to 60p
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 540, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 450, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 270, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 225, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 200, label: '6K 24p' },
            // 4K Full Frame (4030×2268) - up to 60p
            { resolution: '4K', fps: 60, width: 4030, height: 2268, dataRate: 240, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 200, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4030, height: 2268, dataRate: 120, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 100, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4030, height: 2268, dataRate: 96, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 480, label: '4K 120p (DX)' }
        ]
    },
    'n-raw': {
        name: 'N-RAW (12-bit)',
        shortName: 'N-RAW',
        color: '#ffaa00',
        modes: [
            // 6K Full Frame (6048×3402) - up to 60p
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 580, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 485, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 290, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 242, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 232, label: '6K 24p' },
            // 4K Full Frame (4030×2268) - up to 60p
            { resolution: '4K', fps: 60, width: 4030, height: 2268, dataRate: 260, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 217, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4030, height: 2268, dataRate: 130, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 108, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4030, height: 2268, dataRate: 104, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 520, label: '4K 120p (DX)' }
        ]
    },
    'prores-raw-hq': {
        name: 'ProRes RAW HQ',
        shortName: 'ProRes RAW',
        color: '#44aaff',
        modes: [
            // 6K (6048×3402) - up to 30p only
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 380, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 317, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 304, label: '6K 24p' },
            // 4K (4030×2268) - up to 60p
            { resolution: '4K', fps: 60, width: 4030, height: 2268, dataRate: 340, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 283, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4030, height: 2268, dataRate: 170, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 142, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4030, height: 2268, dataRate: 136, label: '4K 24p' }
        ]
    },
    'prores-422-hq': {
        name: 'ProRes 422 HQ (10-bit 4:2:2)',
        shortName: 'ProRes 422',
        color: '#44ddaa',
        modes: [
            // 5.4K (5376×3024) - up to 30p only
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 235, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 196, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 188, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 60p
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 176, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 147, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 88, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 73, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 70, label: '4K 24p' },
            // 1080p (1920×1080) - up to 120p
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 88, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 73, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 44, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 37, label: '1080p 50p' }
        ]
    },
    'h265-10bit': {
        name: 'H.265 (10-bit 4:2:0)',
        shortName: 'H.265 10-bit',
        color: '#aa44ff',
        modes: [
            // 5.4K (5376×3024) - up to 60p
            { resolution: '5.4K', fps: 60, width: 5376, height: 3024, dataRate: 150, label: '5.4K 60p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 125, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 75, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 62, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 60, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 120p
            { resolution: '4K', fps: 120, width: 3840, height: 2160, dataRate: 200, label: '4K 120p' },
            { resolution: '4K', fps: 100, width: 3840, height: 2160, dataRate: 167, label: '4K 100p' },
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 100, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 83, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 50, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 42, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 40, label: '4K 24p' },
            // 1080p (1920×1080) - up to 240p
            { resolution: '1080p', fps: 240, width: 1920, height: 1080, dataRate: 100, label: '1080p 240p' },
            { resolution: '1080p', fps: 200, width: 1920, height: 1080, dataRate: 83, label: '1080p 200p' },
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 50, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 42, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 25, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 21, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 12, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 10, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 10, label: '1080p 24p' }
        ]
    },
    'h265-8bit': {
        name: 'H.265 (8-bit 4:2:0)',
        shortName: 'H.265 8-bit',
        color: '#ff44aa',
        modes: [
            // 5.4K (5376×3024) - up to 60p
            { resolution: '5.4K', fps: 60, width: 5376, height: 3024, dataRate: 120, label: '5.4K 60p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 100, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 60, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 50, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 48, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 120p
            { resolution: '4K', fps: 120, width: 3840, height: 2160, dataRate: 160, label: '4K 120p' },
            { resolution: '4K', fps: 100, width: 3840, height: 2160, dataRate: 133, label: '4K 100p' },
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 80, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 67, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 40, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 33, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 32, label: '4K 24p' },
            // 1080p (1920×1080) - up to 240p
            { resolution: '1080p', fps: 240, width: 1920, height: 1080, dataRate: 80, label: '1080p 240p' },
            { resolution: '1080p', fps: 200, width: 1920, height: 1080, dataRate: 67, label: '1080p 200p' },
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 40, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 33, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 20, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 17, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 10, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 8, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 8, label: '1080p 24p' }
        ]
    },
    'h264': {
        name: 'H.264 (8-bit 4:2:0)',
        shortName: 'H.264',
        color: '#88cc44',
        // H.264 is 1080p ONLY, max 60p
        modes: [
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 16, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 13, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 8, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 7, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 6, label: '1080p 24p' }
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
