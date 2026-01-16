"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import TransactionChart from "./TransactionChart";
import { useMemo } from "react";

const GET_NETWORK_STATS = gql`
  query GetNetworkStats($chainId: Int!) {
    networkStats(chainId: $chainId) {
      chainId
      transactionCount
      totalEvents
      latestBlock
      medianGasPrice
      tps
    }
  }
`;

export default function DashboardStats({ chainId }: { chainId?: string }) {
    const numericChainId = useMemo(() => {
        if (!chainId || chainId === "all") return 1; // Default to Mainnet for stats if "all"
        return parseInt(chainId);
    }, [chainId]);

    const { data, loading, networkStatus } = useQuery(GET_NETWORK_STATS, {
        variables: { chainId: numericChainId },
        notifyOnNetworkStatusChange: false,
        fetchPolicy: "cache-first"
    });

    const stats = data?.networkStats;

    // Only show "..." on initial load when data is truly missing
    const isInitialLoading = loading && !stats;

    const formatGwei = (wei: string | undefined) => {
        if (!wei) return "0";
        return (parseFloat(wei) / 1e9).toFixed(3);
    };

    const isSepolia = numericChainId === 11155111;

    return (
        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Ether Price Card (Chain Aware) */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            {isSepolia ? "Sepolia ETH" : "Ether Price"}
                        </h3>
                        <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-xl font-bold text-zinc-900">
                                {isSepolia ? "Testnet" : "$3,309.97"}
                            </span>
                            {!isSepolia && (
                                <span className="text-xs font-medium text-rose-500">(-0.16%)</span>
                            )}
                        </div>
                        <p className="mt-1 text-xs text-zinc-400">
                            {isSepolia ? "Chain ID: 11155111" : "@ 0.0346 BTC"}
                        </p>
                    </div>
                    <div className="rounded-full bg-zinc-100 p-2">
                        {isSepolia ? (
                            <svg className="h-6 w-6 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6 text-zinc-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                            </svg>
                        )}
                    </div>
                </div>
                {!isSepolia && (
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Market Cap</h3>
                        <p className="text-base font-medium text-zinc-900">$399,496,047,967.00</p>
                    </div>
                )}
                {isSepolia && (
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Network Type</h3>
                        <p className="text-base font-medium text-zinc-600 italic">Test Network</p>
                    </div>
                )}
            </div>

            {/* Transactions & Gas (Real Data - Silent Updates) */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col h-full justify-between gap-4">
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Transactions</h3>
                                <p className="mt-1 text-base font-medium text-zinc-900">
                                    {isInitialLoading ? "..." : (stats?.transactionCount?.toLocaleString() || "0")}
                                    {!isInitialLoading && (
                                        <span className="text-xs text-zinc-400 ml-1">({stats?.tps || "0.00"} TPS)</span>
                                    )}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 text-right">Med Gas Price</h3>
                                <p className="mt-1 text-base font-medium text-zinc-900 text-right">
                                    {isInitialLoading ? "..." : formatGwei(stats?.medianGasPrice)} Gwei
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Latest Block Indexed</h3>
                            <p className="mt-1 text-sm font-medium text-zinc-900">
                                {isInitialLoading ? "..." : (stats?.latestBlock || "0")}
                            </p>
                        </div>
                        <div className="text-right">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Total Events</h3>
                            <p className="mt-1 text-sm font-medium text-zinc-900">
                                {isInitialLoading ? "..." : (stats?.totalEvents?.toLocaleString() || "0")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction History Graph */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm overflow-hidden">
                <TransactionChart chainId={chainId} />
            </div>
        </div>
    );
}
