"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const GET_EVENTS = gql`
  query EventsPage(
    $limit: Int!
    $offset: Int!
    $chainId: Int
    $type: String
    $status: String
    $search: String
  ) {
    eventsPage(
      limit: $limit
      offset: $offset
      chainId: $chainId
      type: $type
      status: $status
      search: $search
    ) {
      totalCount
      nodes {
        id
        chainId
        blockNumber
        txHash
        eventType
        contractAddress
        from
        to
        amount
        timestamp
        status
      }
    }
    chains {
      chainId
      name
      type
    }
  }
`;

const PAGE_SIZES = [10, 25, 50, 100];
const TYPE_OPTIONS = ["All", "Transaction", "Token Transfer", "Contract Event"];
const STATUS_OPTIONS = ["All", "Success", "Failed"];

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

const displayType = (eventType: string) => {
  if (eventType === "Transfer") return "Token Transfer";
  if (eventType === "Transaction") return "Transaction";
  if (eventType === "Transaction") return "Transaction";
  return "Contract Event";
};

const formatAmount = (value?: string) => {
  if (!value) return "-";
  // If value is very long (likely Wei), truncate or show as is
  if (value.length > 20) return value.slice(0, 6) + "..." + value.slice(-4);
  return value;
};

interface EventListProps {
  selectedChainId?: string;
  onChainChange?: (chainId: string) => void;
}

export default function EventList({ selectedChainId, onChainChange }: EventListProps) {
  const [isClient, setIsClient] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchValue, setSearchValue] = useState("");
  // Use local state if no prop provided, otherwise use prop (controlled)
  const [internalChainFilter, setInternalChainFilter] = useState("all");

  const chainFilter = selectedChainId !== undefined ? selectedChainId : internalChainFilter;

  const handleChainChange = (newChain: string) => {
    if (onChainChange) {
      onChainChange(newChain);
    } else {
      setInternalChainFilter(newChain);
    }
  };

  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pageSize, setPageSize] = useState(25);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handle = setTimeout(() => {
      setSearchValue(searchInput.trim());
    }, 400);
    return () => clearTimeout(handle);
  }, [searchInput]);

  useEffect(() => {
    setPage(1);
  }, [searchValue, chainFilter, typeFilter, statusFilter, pageSize]);

  const variables = useMemo(() => {
    const chainIdValue = chainFilter === "all" ? undefined : Number(chainFilter);
    return {
      limit: pageSize,
      offset: (page - 1) * pageSize,
      chainId: chainIdValue,
      type: typeFilter === "All" ? undefined : typeFilter,
      status: statusFilter === "All" ? undefined : statusFilter,
      search: searchValue.length > 0 ? searchValue : undefined
    };
  }, [chainFilter, page, pageSize, searchValue, statusFilter, typeFilter]);

  const { loading, error, data } = useQuery<any>(GET_EVENTS, {
    variables,
    notifyOnNetworkStatusChange: false,
    fetchPolicy: "cache-first"
  });

  const events = data?.eventsPage?.nodes ?? [];
  const totalCount = data?.eventsPage?.totalCount ?? 0;
  const chains = data?.chains ?? [];
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const chainMap = useMemo(() => {
    return new Map(chains.map((chain: any) => [chain.chainId, chain]));
  }, [chains]);

  const isInitialLoading = loading && !data;
  const showEmpty = !loading && events.length === 0;

  if (!isClient) return <div className="p-6">Loading UI...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error.message}</div>;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Latest Events</h2>
            <p className="text-sm text-zinc-500">
              {totalCount.toLocaleString()} total records across chains
            </p>
          </div>
          <div className="flex flex-1 items-center gap-3 lg:justify-end">
            <div className="relative w-full max-w-md">
              <input
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search by tx hash, address, block, token or contract"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <span className="pointer-events-none absolute right-3 top-2.5 text-xs text-zinc-400">
                ⌘K
              </span>
            </div>
            <button
              onClick={() => setSearchInput("")}
              className="hidden rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-50 lg:inline-flex"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            Chain
            <select
              value={chainFilter}
              onChange={(event) => handleChainChange(event.target.value)}
              className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
            >
              <option value="all">All Chains</option>
              {chains.map((chain: any) => (
                <option key={chain.chainId} value={chain.chainId}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            Type
            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
              className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
            >
              {TYPE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            Status
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 px-5 py-3 text-sm text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="font-medium text-zinc-700">Events</span>
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
              Sorted by time
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs">
              Page {page} of {totalPages}
            </span>
            <label className="flex items-center gap-2 text-xs">
              Page size
              <select
                value={pageSize}
                onChange={(event) => setPageSize(Number(event.target.value))}
                className="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-700"
              >
                {PAGE_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-fixed text-left text-sm">
            <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <tr>
                <th className="px-5 py-3">
                  <span className="inline-flex items-center gap-1">
                    Age
                    <span className="text-zinc-400">↓</span>
                  </span>
                </th>
                <th className="px-4 py-3 text-right">Block</th>
                <th className="px-4 py-3">Txn Hash</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">From</th>
                <th className="px-4 py-3">To</th>
                <th className="hidden px-4 py-3 xl:table-cell">Contract</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3">Chain</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {isInitialLoading && (
                <tr>
                  <td colSpan={10} className="px-6 py-10 text-center text-sm text-zinc-500">
                    Loading events...
                  </td>
                </tr>
              )}
              {showEmpty && (
                <tr>
                  <td colSpan={10} className="px-6 py-10 text-center text-sm text-zinc-500">
                    No events match the current filters.
                  </td>
                </tr>
              )}
              {events.map((event: any) => {
                const chain = chainMap.get(event.chainId);
                const typeLabel = displayType(event.eventType);
                return (
                  <tr
                    key={event.id}
                    className="transition-colors hover:bg-zinc-50"
                  >
                    <td className="px-5 py-4 text-zinc-600">
                      <span title={new Date(event.timestamp).toLocaleString()}>
                        {formatTimeAgo(event.timestamp)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right font-medium text-zinc-800">
                      {event.blockNumber}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-blue-600">
                      <Link href={`/transactions/${event.txHash}`} className="hover:underline">
                        {shortenHash(event.txHash, 12)}
                      </Link>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                        {typeLabel}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-zinc-600">
                      {event.from ? (
                        <Link href={`/wallet/${event.from}`} className="hover:text-blue-600 hover:underline">
                          <span title={event.from}>{shortenHash(event.from, 8)}</span>
                        </Link>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-zinc-600">
                      {event.to ? (
                        <Link href={`/wallet/${event.to}`} className="hover:text-blue-600 hover:underline">
                          <span title={event.to}>{shortenHash(event.to, 8)}</span>
                        </Link>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="hidden px-4 py-4 font-mono text-xs text-zinc-600 xl:table-cell">
                      {event.contractAddress ? (
                        <Link href={`/wallet/${event.contractAddress}`} className="hover:text-blue-600 hover:underline">
                          <span title={event.contractAddress}>
                            {shortenHash(event.contractAddress, 8)}
                          </span>
                        </Link>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-4 text-right text-sm text-zinc-700">
                      {formatAmount(event.amount)}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                        {(chain as any)?.name ?? `Chain ${event.chainId}`}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${event.status === "Failed"
                          ? "bg-rose-50 text-rose-700"
                          : "bg-emerald-50 text-emerald-700"
                          }`}
                      >
                        {event.status ?? "Success"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 px-5 py-4 text-sm">
          <div className="text-zinc-500">
            Showing{" "}
            <span className="font-medium text-zinc-700">
              {Math.min((page - 1) * pageSize + 1, totalCount).toLocaleString()}
            </span>{" "}
            to{" "}
            <span className="font-medium text-zinc-700">
              {Math.min(page * pageSize, totalCount).toLocaleString()}
            </span>{" "}
            of{" "}
            <span className="font-medium text-zinc-700">
              {totalCount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 transition-colors"
            >
              First
            </button>
            <button
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
              className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 transition-colors"
            >
              Previous
            </button>

            <div className="flex items-center gap-2 px-2">
              <input
                type="number"
                min={1}
                max={totalPages}
                value={page}
                onChange={(event) => {
                  const val = Number(event.target.value);
                  if (val >= 1 && val <= totalPages) {
                    setPage(val);
                  }
                }}
                className="w-14 rounded-md border border-zinc-200 px-2 py-1 text-center text-xs text-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <span className="text-xs text-zinc-400 font-medium">of {totalPages.toLocaleString()}</span>
            </div>

            <button
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 transition-colors"
            >
              Next
            </button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
              className="rounded-md border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 transition-colors"
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
