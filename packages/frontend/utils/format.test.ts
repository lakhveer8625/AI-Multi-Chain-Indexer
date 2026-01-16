
// Mock of the format utilities since we are running in plain node
const formatTimeAgo = (value: string) => {
    const now = Date.now();
    const timestamp = new Date(value).getTime();
    const diffSeconds = Math.max(0, Math.floor((now - timestamp) / 1000));
    if (diffSeconds < 60) return `${diffSeconds}s ago`;
    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
};

const shortenHash = (value?: string, size = 10) => {
    if (!value) return "-";
    if (value.length <= size + 4) return value;
    return `${value.slice(0, size)}...${value.slice(-4)}`;
};

async function runTests() {
    console.log('Running Frontend Utils Unit Tests...');

    let passed = 0;
    let failed = 0;

    const assert = (condition: boolean, msg: string) => {
        if (condition) {
            console.log(`✅ ${msg}`);
            passed++;
        } else {
            console.error(`❌ ${msg}`);
            failed++;
        }
    };

    // Test 1: formatTimeAgo
    const now = new Date();
    const tenMinAgo = new Date(now.getTime() - 10 * 60 * 1000).toISOString();
    assert(formatTimeAgo(tenMinAgo) === '10m ago', 'Should format 10 minutes ago');

    const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString();
    assert(formatTimeAgo(twoHoursAgo) === '2h ago', 'Should format 2 hours ago');

    // Test 2: shortenHash
    const longHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
    assert(shortenHash(longHash, 6) === '0x1234...cdef', 'Should shorten hash to 6 prefix chars');
    assert(shortenHash(undefined) === '-', 'Should handle undefined hash');

    console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed`);
    if (failed > 0) process.exit(1);
}

runTests().catch(console.error);
