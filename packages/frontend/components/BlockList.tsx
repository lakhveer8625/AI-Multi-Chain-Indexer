"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { formatTimeAgo, shortenHash } from "../utils/format";

const GET_BLOCKS = gql`
  query BlocksPage($limit: Int!, $offset: Int!, $chainId: Int) {
    blocksPage(limit: $limit, offset: $offset, chainId: $chainId) {
      totalCount
      nodes {
        id
        chainId
        number
        hash
        parentHash
        timestamp
        isCanonical
      }
    }
    chains {
      chainId
      name
    }
  }
`;

const PAGE_SIZES = [10, 25, 50, 100];

export default function BlockList({ selectedChainId }: { selectedChainId?: string }) {
    const [pageSize, setPageSize] = useState(25);
    const [page, setPage] = useState(1);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Reset to page 1 when filters or page size change
    useEffect(() => {
        setPage(1);
    }, [selectedChainId, pageSize]);

    const variables = useMemo(() => {
        const chainIdValue = selectedChainId === "all" || !selectedChainId ? undefined : Number(selectedChainId);
        return {
            limit: pageSize,
            offset: (page - 1) * pageSize,
            chainId: chainIdValue,
        };
    }, [selectedChainId, page, pageSize]);

    const { loading, error, data } = useQuery<any>(GET_BLOCKS, {
        variables,
        notifyOnNetworkStatusChange: false,
        fetchPolicy: "cache-first"
    });

    const blocks = data?.blocksPage?.nodes ?? [];
    const totalCount = data?.blocksPage?.totalCount ?? 0;
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

    if (!isClient) return null;
    if (error) return <div className="p-6 text-red-500">Error: {error.message}</div>;

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 px-5 py-4 bg-zinc-50/50">
                    <div className="flex items-center gap-3">
                        <h2 className="text-sm font-semibold text-zinc-900">Blocks</h2>
                        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                            {totalCount.toLocaleString()} blocks found
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-xs text-zinc-500">
                            Page Size
                            <select
                                value={pageSize}
                                onChange={(e) => setPageSize(Number(e.target.value))}
                                className="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-700"
                            >
                                {PAGE_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </label>
                    </div>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wider text-zinc-500 border-b border-zinc-200">
                            <tr>
                                <th className="px-5 py-3">Block</th>
                                <th className="px-5 py-3">Age</th>
                                <th className="px-5 py-3">Hash</th>
                                <th className="px-5 py-3">Chain</th>
                                <th className="px-5 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 bg-white">
                            {loading && blocks.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-zinc-500">Loading blocks...</td>
                                </tr>
                            ) : blocks.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-zinc-500">No blocks found.</td>
                                </tr>
                            ) : blocks.map((block: any) => (
                                <tr key={block.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-5 py-4 font-medium text-blue-600">
                                        <Link href={`/block/${block.number}?chainId=${block.chainId}`}>{block.number}</Link>
                                    </td>
                                    <td className="px-5 py-4 text-zinc-600">{formatTimeAgo(block.timestamp)}</td>
                                    <td className="px-5 py-4 font-mono text-xs text-zinc-500">{shortenHash(block.hash, 16)}</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                                            {data?.chains?.find((c: any) => c.chainId === block.chainId)?.name ?? `Chain ${block.chainId}`}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                                            Confirmed
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-200 px-5 py-4 text-sm bg-zinc-50/50">
                    <div className="text-zinc-500 hidden sm:block">
                        Showing {((page - 1) * pageSize) + 1} to {Math.min(page * pageSize, totalCount)} of {totalCount}
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setPage(1)}
                            disabled={page === 1}
                            className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 disabled:opacity-40 hover:bg-white"
                        >First</button>
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 disabled:opacity-40 hover:bg-white"
                        >Prev</button>
                        <div className="px-3 py-1 text-xs font-medium text-zinc-900 bg-white border border-zinc-200 rounded-md">
                            Page {page} of {totalPages}
                        </div>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 disabled:opacity-40 hover:bg-white"
                        >Next</button>
                        <button
                            onClick={() => setPage(totalPages)}
                            disabled={page === totalPages}
                            className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 disabled:opacity-40 hover:bg-white"
                        >Last</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
