"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header({ role }: { role: string }) {
  const router = useRouter();

  return (
    <header className="w-full bg-fondoS text-white p-4  flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-lg">Polleria Benito</h1>
        <span className="text-white/70">|</span>
        <span className="text-sm">{role}</span>
      </div>

      <button
        onClick={() => router.back()}
        className="p-2 hover:opacity-80 transition"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
    </header>
  );
}
