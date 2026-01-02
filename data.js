// Nikon ZR Recording Modes Data
// Data rates in MB/s (megabytes per second)
//
// VERIFIED SOURCES (with exact bitrates from official specifications):
//
// R3D NE / N-RAW High Quality (memorywolf.com, alikgriffin.com):
//   6048x3402: 59.94p=3780Mbps, 50p=3160Mbps, 29.97p=1900Mbps, 25p=1590Mbps, 23.97p=1520Mbps
//   4032x2268: 59.94p=1710Mbps, 50p=1440Mbps, 29.97p=860Mbps, 25p=730Mbps, 23.97p=700Mbps
//   3984x2240: 119.88p=3340Mbps, 100p=2800Mbps, 59.94p=1670Mbps, 50p=1400Mbps, 29.97p=840Mbps, 25p=710Mbps, 23.97p=680Mbps
//
// N-RAW Normal Quality (memorywolf.com, alikgriffin.com):
//   6048x3402: 59.94p=1920Mbps, 50p=1610Mbps, 29.97p=970Mbps, 25p=810Mbps, 23.97p=780Mbps
//   4032x2268: 59.94p=880Mbps, 50p=750Mbps, 29.97p=450Mbps, 25p=380Mbps, 23.97p=370Mbps
//   3984x2240: 119.88p=1730Mbps, 100p=1460Mbps, 59.94p=870Mbps, 50p=730Mbps, 29.97p=440Mbps, 25p=370Mbps, 23.97p=360Mbps
//
// ProRes RAW HQ (memorywolf.com, zshooters.com):
//   6048x3402: 29.97p=5000Mbps (625 MB/s) - max 30p at 6K
//   4K: up to 60p
//
// ProRes 422 HQ (newsshooter.com):
//   5376x3024 30p: 663GB/hr (~184 MB/s)
//   3840x2160 24p: 318GB/hr (~88 MB/s)
//   Max 30p at 5.4K, up to 60p at 4K, up to 120p at 1080p
//
// H.265 10-bit (zshooters.com, amateur photographer):
//   5.4K 60p: 370 Mbps (~46 MB/s)
//   4K 60p: 300 Mbps (~37.5 MB/s)
//   Available up to 5.4K 60p, 4K 120p, 1080p 240p

const RECORDING_MODES = {
    'r3d-ne': {
        name: 'R3D NE (12-bit RAW)',
        shortName: 'R3D NE',
        color: '#dc3545',
        // Verified data rates from official specifications
        modes: [
            // 6K (6048×3402) - up to 60p
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 472.5, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 395, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 237.5, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 198.75, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 190, label: '6K 24p' },
            // 4K (4032×2268) - up to 60p
            { resolution: '4K', fps: 60, width: 4032, height: 2268, dataRate: 213.75, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4032, height: 2268, dataRate: 180, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4032, height: 2268, dataRate: 107.5, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4032, height: 2268, dataRate: 91.25, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4032, height: 2268, dataRate: 87.5, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 417.5, label: '4K 120p (DX)' },
            { resolution: '4K DX', fps: 100, width: 3984, height: 2240, dataRate: 350, label: '4K 100p (DX)' },
            { resolution: '4K DX', fps: 60, width: 3984, height: 2240, dataRate: 208.75, label: '4K 60p (DX)' },
            { resolution: '4K DX', fps: 50, width: 3984, height: 2240, dataRate: 175, label: '4K 50p (DX)' },
            { resolution: '4K DX', fps: 30, width: 3984, height: 2240, dataRate: 105, label: '4K 30p (DX)' },
            { resolution: '4K DX', fps: 25, width: 3984, height: 2240, dataRate: 88.75, label: '4K 25p (DX)' },
            { resolution: '4K DX', fps: 24, width: 3984, height: 2240, dataRate: 85, label: '4K 24p (DX)' }
        ]
    },
    'n-raw-high': {
        name: 'N-RAW High (12-bit)',
        shortName: 'N-RAW High',
        color: '#fd7e14',
        // Same as R3D NE (both use TicoRaw compression at same quality)
        modes: [
            // 6K (6048×3402) - up to 60p
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 472.5, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 395, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 237.5, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 198.75, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 190, label: '6K 24p' },
            // 4K (4032×2268) - up to 60p
            { resolution: '4K', fps: 60, width: 4032, height: 2268, dataRate: 213.75, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4032, height: 2268, dataRate: 180, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4032, height: 2268, dataRate: 107.5, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4032, height: 2268, dataRate: 91.25, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4032, height: 2268, dataRate: 87.5, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 417.5, label: '4K 120p (DX)' },
            { resolution: '4K DX', fps: 100, width: 3984, height: 2240, dataRate: 350, label: '4K 100p (DX)' },
            { resolution: '4K DX', fps: 60, width: 3984, height: 2240, dataRate: 208.75, label: '4K 60p (DX)' },
            { resolution: '4K DX', fps: 50, width: 3984, height: 2240, dataRate: 175, label: '4K 50p (DX)' },
            { resolution: '4K DX', fps: 30, width: 3984, height: 2240, dataRate: 105, label: '4K 30p (DX)' },
            { resolution: '4K DX', fps: 25, width: 3984, height: 2240, dataRate: 88.75, label: '4K 25p (DX)' },
            { resolution: '4K DX', fps: 24, width: 3984, height: 2240, dataRate: 85, label: '4K 24p (DX)' }
        ]
    },
    'n-raw-normal': {
        name: 'N-RAW Normal (12-bit)',
        shortName: 'N-RAW Normal',
        color: '#e67e22',
        // Verified: approximately half of High quality data rates
        modes: [
            // 6K (6048×3402) - up to 60p
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 240, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 201.25, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 121.25, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 101.25, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 97.5, label: '6K 24p' },
            // 4K (4032×2268) - up to 60p
            { resolution: '4K', fps: 60, width: 4032, height: 2268, dataRate: 110, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4032, height: 2268, dataRate: 93.75, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4032, height: 2268, dataRate: 56.25, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4032, height: 2268, dataRate: 47.5, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4032, height: 2268, dataRate: 46.25, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 216.25, label: '4K 120p (DX)' },
            { resolution: '4K DX', fps: 100, width: 3984, height: 2240, dataRate: 182.5, label: '4K 100p (DX)' },
            { resolution: '4K DX', fps: 60, width: 3984, height: 2240, dataRate: 108.75, label: '4K 60p (DX)' },
            { resolution: '4K DX', fps: 50, width: 3984, height: 2240, dataRate: 91.25, label: '4K 50p (DX)' },
            { resolution: '4K DX', fps: 30, width: 3984, height: 2240, dataRate: 55, label: '4K 30p (DX)' },
            { resolution: '4K DX', fps: 25, width: 3984, height: 2240, dataRate: 46.25, label: '4K 25p (DX)' },
            { resolution: '4K DX', fps: 24, width: 3984, height: 2240, dataRate: 45, label: '4K 24p (DX)' }
        ]
    },
    'prores-raw-hq': {
        name: 'ProRes RAW HQ (12-bit)',
        shortName: 'ProRes RAW',
        color: '#0d6efd',
        // Verified: 6K 30p = 5000 Mbps = 625 MB/s (max 30p at 6K, up to 60p at 4K)
        modes: [
            // 6K (6048×3402) - max 30p
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 625, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 521, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 500, label: '6K 24p' },
            // 4K (4032×2268) - up to 60p (scaled from 6K based on pixel count ratio ~44%)
            { resolution: '4K', fps: 60, width: 4032, height: 2268, dataRate: 556, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4032, height: 2268, dataRate: 463, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4032, height: 2268, dataRate: 278, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4032, height: 2268, dataRate: 232, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4032, height: 2268, dataRate: 222, label: '4K 24p' }
        ]
    },
    'prores-422-hq': {
        name: 'ProRes 422 HQ (10-bit 4:2:2)',
        shortName: 'ProRes 422',
        color: '#20c997',
        // Verified: 5.4K 30p = 663GB/hr (~184 MB/s), 4K 24p = 318GB/hr (~88 MB/s)
        // Max 30p at 5.4K, up to 60p at 4K, up to 120p at 1080p
        modes: [
            // 5.4K (5376×3024) - max 30p
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 184, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 153, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 147, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 60p
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 176, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 147, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 110, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 92, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 88, label: '4K 24p' },
            // 1080p (1920×1080) - up to 120p
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 73, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 61, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 44, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 37, label: '1080p 50p' }
        ]
    },
    'h265-10bit': {
        name: 'H.265 (10-bit 4:2:0)',
        shortName: 'H.265 10-bit',
        color: '#6f42c1',
        // Verified: 5.4K 60p = 370 Mbps (~46 MB/s), 4K 60p = 300 Mbps (~37.5 MB/s)
        // Available up to 5.4K 60p, 4K 120p, 1080p 240p
        modes: [
            // 5.4K (5376×3024) - up to 60p
            { resolution: '5.4K', fps: 60, width: 5376, height: 3024, dataRate: 46, label: '5.4K 60p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 38, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 23, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 19, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 18, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 120p
            { resolution: '4K', fps: 120, width: 3840, height: 2160, dataRate: 75, label: '4K 120p' },
            { resolution: '4K', fps: 100, width: 3840, height: 2160, dataRate: 62.5, label: '4K 100p' },
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 37.5, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 31, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 19, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 16, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 15, label: '4K 24p' },
            // 1080p (1920×1080) - up to 240p
            { resolution: '1080p', fps: 240, width: 1920, height: 1080, dataRate: 37.5, label: '1080p 240p' },
            { resolution: '1080p', fps: 200, width: 1920, height: 1080, dataRate: 31, label: '1080p 200p' },
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 19, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 16, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 9.5, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 8, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 4.75, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 4, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 3.75, label: '1080p 24p' }
        ]
    },
    'h265-8bit': {
        name: 'H.265 (8-bit 4:2:0)',
        shortName: 'H.265 8-bit',
        color: '#d63384',
        // ~80% of 10-bit data rate (standard ratio for 8-bit vs 10-bit)
        modes: [
            // 5.4K (5376×3024) - up to 60p
            { resolution: '5.4K', fps: 60, width: 5376, height: 3024, dataRate: 37, label: '5.4K 60p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 31, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 18, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 15, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 14, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 120p
            { resolution: '4K', fps: 120, width: 3840, height: 2160, dataRate: 60, label: '4K 120p' },
            { resolution: '4K', fps: 100, width: 3840, height: 2160, dataRate: 50, label: '4K 100p' },
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 30, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 25, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 15, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 12.5, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 12, label: '4K 24p' },
            // 1080p (1920×1080) - up to 240p
            { resolution: '1080p', fps: 240, width: 1920, height: 1080, dataRate: 30, label: '1080p 240p' },
            { resolution: '1080p', fps: 200, width: 1920, height: 1080, dataRate: 25, label: '1080p 200p' },
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 15, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 12.5, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 7.5, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 6.25, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 3.75, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 3, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 3, label: '1080p 24p' }
        ]
    },
    'h264': {
        name: 'H.264 (8-bit 4:2:0)',
        shortName: 'H.264',
        color: '#198754',
        // H.264 is 1080p only, similar bitrates to H.265 8-bit at same resolution
        modes: [
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 8, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 6.5, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 4, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 3.25, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 3, label: '1080p 24p' }
        ]
    }
};

// Helper function to calculate recording time in minutes
function calculateRecordingTime(storageGB, dataRateMBps) {
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
