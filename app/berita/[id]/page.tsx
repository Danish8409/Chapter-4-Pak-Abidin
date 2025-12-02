"use client";

import Sidebar from "@/components/sidebar";
import { beritalist } from "@/app/data/berita";

export default function DetailBerita({ params }: { params: { id: string } }) {
  const berita = beritalist.find((b) => b.id === params.id);

  if (!berita) {
    return (
      <Sidebar title="Berita">
        <div className="p-6 text-center text-white">
          <h2 className="text-xl font-semibold">Berita tidak ditemukan</h2>
          <a href="/berita" className="text-blue-400 mt-4 inline-block">
            ← Kembali
          </a>
        </div>
      </Sidebar>
    );
  }

  return (
    <Sidebar title="Berita">
      <div
        className="
          bg-white/10 backdrop-blur-xl 
          p-6 rounded-xl shadow-xl 
          border border-white/20
        "
      >
        <h2 className="text-3xl font-bold text-blue-300 mb-2">
          {berita.name}
        </h2>

        <p className="text-gray-300 text-sm mb-4">
          {berita.tanggal}
        </p>

        <p className="text-gray-200 leading-relaxed">
          {berita.isi}
        </p>

        <a
          href="/berita"
          className="inline-block mt-6 text-blue-400 hover:text-blue-200"
        >
          ← Kembali ke daftar berita
        </a>
      </div>
    </Sidebar>
  );
}
