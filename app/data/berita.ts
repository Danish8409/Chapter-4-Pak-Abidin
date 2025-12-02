export interface Berita {
  id: string;
  name: string;
  tanggal: string;
  isi: string;
}

export const beritalist: Berita[] = [
  {
    id: "1",
    name: "Jasa cinematic terbaik di tiktok!",
    tanggal: "2024-06-01",
    isi: "Kamu tahu sendiri siapa yang pegang jasa cinematic terbaik sekarang ini; mereka sering menghasilkan video dengan tampilan sinematik, editing yang rapi, dan color grading profesional yang langsung menarik perhatian di TikTok maupun platform sosial lainnya.",
  },

  {
    id: "2",
    name: "Jasa cinematic harga murah meriah",
    tanggal: "2024-06-10",
    isi: "Ternyata, dengan hanya 10 ribu rupiah saja kamu sudah bisa mendapatkan jasa pembuatan video cinematic yang sederhana namun sangat menarik untuk konten TikTok atau media sosial lainnya.",
  }
];