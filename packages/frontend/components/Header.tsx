"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Transactions", href: "/transactions" },
    { name: "Blocks", href: "/blocks" },
];

export default function Header() {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        // Check if it looks like a tx hash or address
        const query = searchQuery.trim();
        if (query.length === 66 && query.startsWith("0x")) {
            window.location.href = `/transactions/${query}`;
        } else if (query.length === 42 && query.startsWith("0x")) {
            window.location.href = `/wallet/${query}`;
        } else if (/^\d+$/.test(query)) {
            window.location.href = `/block/${query}`;
        } else {
            // Generic search page or just ignore for now
            console.log("Generic search:", query);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
                            <span className="text-lg font-bold">M</span>
                        </div>
                        <span className="hidden text-xl font-bold tracking-tight text-zinc-900 sm:block">
                            Multi<span className="text-blue-600">Scan</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-1 md:flex">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex flex-1 items-center justify-end gap-4 md:ml-8 lg:ml-20">
                    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Search by Address / Txn Hash / Block"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 pl-10 text-sm text-zinc-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 placeholder:text-zinc-400"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </form>

                    <div className="hidden h-6 w-px bg-zinc-200 sm:block"></div>

                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-medium text-zinc-500">Live</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
