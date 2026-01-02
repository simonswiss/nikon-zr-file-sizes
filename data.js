// Nikon ZR Recording Modes Data
// Data rates in MB/s (megabytes per second)
//
// VERIFIED SOURCES:
// - N-RAW 6K 24p: High ~12GB/min (~200 MB/s), Normal ~6GB/min (~100 MB/s) [DPReview]
// - ProRes RAW HQ 6K 24p: ~18GB/min (~300 MB/s) [DPReview]
// - ProRes 422 HQ 4K 24p: 318GB/hour (~88 MB/s) [Newsshooter]
// - ProRes 422 HQ 5.4K 30p: 663GB/hour (~184 MB/s) [Newsshooter]
// - H.265 10-bit 4K 24-60p: ~144 Mbps (~18 MB/s) [Nikon Z9 specs]
// - H.265 10-bit 4K 120p: ~400 Mbps (~50 MB/s) [Nikon Z9 specs]
// - ProRes 422 HQ is ~5x the data rate of H.265 [Exascend]
//
// NOTE: Rates scale proportionally with resolution and frame rate.

const RECORDING_MODES = {
    'r3d-ne': {
        name: 'R3D NE (12-bit RAW)',
        shortName: 'R3D NE',
        color: '#dc3545',
        // Same as N-RAW High (both use TicoRaw compression)
        modes: [
            // 6K (6048×3402)
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 500, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 415, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 250, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 210, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 200, label: '6K 24p' },
            // 4K (4030×2268)
            { resolution: '4K', fps: 60, width: 4030, height: 2268, dataRate: 220, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 185, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4030, height: 2268, dataRate: 110, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 92, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4030, height: 2268, dataRate: 88, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 440, label: '4K 120p (DX)' }
        ]
    },
    'n-raw-high': {
        name: 'N-RAW High (12-bit)',
        shortName: 'N-RAW High',
        color: '#fd7e14',
        // Verified: 6K 24p = ~12GB/min = ~200 MB/s
        modes: [
            // 6K (6048×3402)
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 500, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 415, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 250, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 210, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 200, label: '6K 24p' },
            // 4K (4030×2268)
            { resolution: '4K', fps: 60, width: 4030, height: 2268, dataRate: 220, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 185, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4030, height: 2268, dataRate: 110, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 92, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4030, height: 2268, dataRate: 88, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 440, label: '4K 120p (DX)' }
        ]
    },
    'n-raw-normal': {
        name: 'N-RAW Normal (12-bit)',
        shortName: 'N-RAW Normal',
        color: '#e67e22',
        // Verified: 6K 24p = ~6GB/min = ~100 MB/s (half of High)
        modes: [
            // 6K (6048×3402)
            { resolution: '6K', fps: 60, width: 6048, height: 3402, dataRate: 250, label: '6K 60p' },
            { resolution: '6K', fps: 50, width: 6048, height: 3402, dataRate: 208, label: '6K 50p' },
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 125, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 105, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 100, label: '6K 24p' },
            // 4K (4030×2268)
            { resolution: '4K', fps: 60, width: 4030, height: 2268, dataRate: 110, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 92, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4030, height: 2268, dataRate: 55, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 46, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4030, height: 2268, dataRate: 44, label: '4K 24p' },
            // 4K DX Crop (3984×2240) - up to 120p
            { resolution: '4K DX', fps: 120, width: 3984, height: 2240, dataRate: 220, label: '4K 120p (DX)' }
        ]
    },
    'prores-raw-hq': {
        name: 'ProRes RAW HQ',
        shortName: 'ProRes RAW',
        color: '#0d6efd',
        // Verified: 6K 24p = ~18GB/min = ~300 MB/s
        modes: [
            // 6K (6048×3402) - up to 30p
            { resolution: '6K', fps: 30, width: 6048, height: 3402, dataRate: 375, label: '6K 30p' },
            { resolution: '6K', fps: 25, width: 6048, height: 3402, dataRate: 312, label: '6K 25p' },
            { resolution: '6K', fps: 24, width: 6048, height: 3402, dataRate: 300, label: '6K 24p' },
            // 4K (4030×2268) - up to 60p
            { resolution: '4K', fps: 60, width: 4030, height: 2268, dataRate: 265, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 4030, height: 2268, dataRate: 220, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 4030, height: 2268, dataRate: 132, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 4030, height: 2268, dataRate: 110, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 4030, height: 2268, dataRate: 106, label: '4K 24p' }
        ]
    },
    'prores-422-hq': {
        name: 'ProRes 422 HQ (10-bit 4:2:2)',
        shortName: 'ProRes 422',
        color: '#20c997',
        // Verified: 4K 24p = 318GB/hr = ~88 MB/s, 5.4K 30p = 663GB/hr = ~184 MB/s
        modes: [
            // 5.4K (5376×3024) - up to 30p
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 184, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 153, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 147, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 60p
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 176, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 147, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 88, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 73, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 70, label: '4K 24p' },
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
        // Verified: 4K 24-60p = ~144 Mbps = ~18 MB/s, 4K 120p = ~400 Mbps = ~50 MB/s
        modes: [
            // 5.4K (5376×3024) - up to 60p
            { resolution: '5.4K', fps: 60, width: 5376, height: 3024, dataRate: 36, label: '5.4K 60p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 30, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 18, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 15, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 14, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 120p
            { resolution: '4K', fps: 120, width: 3840, height: 2160, dataRate: 50, label: '4K 120p' },
            { resolution: '4K', fps: 100, width: 3840, height: 2160, dataRate: 42, label: '4K 100p' },
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 18, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 15, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 9, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 7.5, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 7, label: '4K 24p' },
            // 1080p (1920×1080) - up to 240p
            { resolution: '1080p', fps: 240, width: 1920, height: 1080, dataRate: 25, label: '1080p 240p' },
            { resolution: '1080p', fps: 200, width: 1920, height: 1080, dataRate: 21, label: '1080p 200p' },
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 12, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 10, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 6, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 5, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 3, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 2.5, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 2.4, label: '1080p 24p' }
        ]
    },
    'h265-8bit': {
        name: 'H.265 (8-bit 4:2:0)',
        shortName: 'H.265 8-bit',
        color: '#d63384',
        // ~80% of 10-bit data rate
        modes: [
            // 5.4K (5376×3024) - up to 60p
            { resolution: '5.4K', fps: 60, width: 5376, height: 3024, dataRate: 29, label: '5.4K 60p' },
            { resolution: '5.4K', fps: 50, width: 5376, height: 3024, dataRate: 24, label: '5.4K 50p' },
            { resolution: '5.4K', fps: 30, width: 5376, height: 3024, dataRate: 14, label: '5.4K 30p' },
            { resolution: '5.4K', fps: 25, width: 5376, height: 3024, dataRate: 12, label: '5.4K 25p' },
            { resolution: '5.4K', fps: 24, width: 5376, height: 3024, dataRate: 11, label: '5.4K 24p' },
            // 4K (3840×2160) - up to 120p
            { resolution: '4K', fps: 120, width: 3840, height: 2160, dataRate: 40, label: '4K 120p' },
            { resolution: '4K', fps: 100, width: 3840, height: 2160, dataRate: 33, label: '4K 100p' },
            { resolution: '4K', fps: 60, width: 3840, height: 2160, dataRate: 14, label: '4K 60p' },
            { resolution: '4K', fps: 50, width: 3840, height: 2160, dataRate: 12, label: '4K 50p' },
            { resolution: '4K', fps: 30, width: 3840, height: 2160, dataRate: 7, label: '4K 30p' },
            { resolution: '4K', fps: 25, width: 3840, height: 2160, dataRate: 6, label: '4K 25p' },
            { resolution: '4K', fps: 24, width: 3840, height: 2160, dataRate: 5.5, label: '4K 24p' },
            // 1080p (1920×1080) - up to 240p
            { resolution: '1080p', fps: 240, width: 1920, height: 1080, dataRate: 20, label: '1080p 240p' },
            { resolution: '1080p', fps: 200, width: 1920, height: 1080, dataRate: 17, label: '1080p 200p' },
            { resolution: '1080p', fps: 120, width: 1920, height: 1080, dataRate: 10, label: '1080p 120p' },
            { resolution: '1080p', fps: 100, width: 1920, height: 1080, dataRate: 8, label: '1080p 100p' },
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 5, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 4, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 2.5, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 2, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 2, label: '1080p 24p' }
        ]
    },
    'h264': {
        name: 'H.264 (8-bit 4:2:0)',
        shortName: 'H.264',
        color: '#198754',
        // H.264 is 1080p only, similar to H.265 8-bit
        modes: [
            { resolution: '1080p', fps: 60, width: 1920, height: 1080, dataRate: 6, label: '1080p 60p' },
            { resolution: '1080p', fps: 50, width: 1920, height: 1080, dataRate: 5, label: '1080p 50p' },
            { resolution: '1080p', fps: 30, width: 1920, height: 1080, dataRate: 3, label: '1080p 30p' },
            { resolution: '1080p', fps: 25, width: 1920, height: 1080, dataRate: 2.5, label: '1080p 25p' },
            { resolution: '1080p', fps: 24, width: 1920, height: 1080, dataRate: 2.4, label: '1080p 24p' }
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
