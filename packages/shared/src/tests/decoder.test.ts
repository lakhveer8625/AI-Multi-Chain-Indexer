import { ethers } from 'ethers';

// Mock decoder function (simulating what we might test)
function decodeTransfer(topic0: string, data: string) {
    if (topic0 !== '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef') {
        return null;
    }
    // Simple mock decoding
    return {
        from: '0x0000000000000000000000000000000000000000',
        to: '0x0000000000000000000000000000000000000000',
        value: BigInt(data || '0')
    };
}

async function runTests() {
    console.log('Running Decoder Unit Tests...');

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

    // Test 1: ERC20 Transfer Signature
    const transferSig = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
    const result = decodeTransfer(transferSig, '0x0000000000000000000000000000000000000000000000000000000000000064'); // 100

    assert(result !== null, 'Should decode valid Transfer topic');
    assert(result?.value === 100n, 'Should decode amount 100');

    // Test 2: Invalid Signature
    const invalidSig = '0x0000000000000000000000000000000000000000000000000000000000000000';
    const result2 = decodeTransfer(invalidSig, '0x');

    assert(result2 === null, 'Should return null for invalid topic');

    console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed`);
    if (failed > 0) process.exit(1);
}

runTests().catch(console.error);
