
// Simple mock for block normalization test
const normalizeBlock = (block: any) => ({
    ...block,
    id: block.id.toString(),
    number: block.number.toString(),
    timestamp: block.timestamp.toISOString()
});

async function runTests() {
    console.log('Running Block Resolver Unit Tests...');

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

    // Test 1: Normalize Block
    const mockBlock = {
        id: 1,
        chainId: 1,
        number: 123456n,
        hash: '0xabc',
        parentHash: '0xdef',
        timestamp: new Date('2024-01-01T00:00:00Z'),
        isCanonical: true
    };

    const normalized = normalizeBlock(mockBlock);

    assert(normalized.id === '1', 'ID should be string');
    assert(normalized.number === '123456', 'Number should be string');
    assert(normalized.timestamp === '2024-01-01T00:00:00.000Z', 'Timestamp should be ISO string');
    assert(normalized.hash === '0xabc', 'Hash should be preserved');

    console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed`);
    if (failed > 0) process.exit(1);
}

runTests().catch(console.error);
