import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // 1. Ethereum Mainnet
    await prisma.chain.upsert({
        where: { chainId: 1 },
        update: {},
        create: {
            chainId: 1,
            name: 'Ethereum Mainnet',
            rpcUrl: 'https://rpc.ankr.com/eth',
            type: 'EVM'
        },
    });

    // 2. Sepolia
    await prisma.chain.upsert({
        where: { chainId: 11155111 },
        update: {},
        create: {
            chainId: 11155111,
            name: 'Sepolia',
            rpcUrl: 'https://rpc.ankr.com/eth_sepolia',
            type: 'EVM'
        },
    });

    // 3. Solana
    await prisma.chain.upsert({
        where: { chainId: 101 }, // Using 101 for Solana Mainnet logic
        update: {},
        create: {
            chainId: 101,
            name: 'Solana Mainnet',
            rpcUrl: 'https://api.mainnet-beta.solana.com',
            type: 'SOLANA'
        },
    });

    console.log('Seeding completed.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
