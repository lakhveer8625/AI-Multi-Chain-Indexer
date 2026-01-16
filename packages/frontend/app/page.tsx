"use client";

import EventList from "@/components/EventList";
import DashboardStats from "@/components/DashboardStats";

import { useState } from "react";

export default function Home() {
  const [chainId, setChainId] = useState("all");

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <DashboardStats chainId={chainId} />
        <EventList selectedChainId={chainId} onChainChange={setChainId} />
      </section>
    </main>
  );
}
