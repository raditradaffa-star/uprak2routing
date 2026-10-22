// app/data.ts

// 1. Tipe data (Interface) untuk setiap item cerita
export interface Cerita {
  id: number | string;
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

// 2. Data array cerita dan pengalaman siswa RPL
export const ceritaList: Cerita[] = [
  {
    id: 1,
    title: "Pengalaman Seru Belajar Tailwind CSS dan Next.js",
    slug: "pengalaman-belajar-tailwind",
    date: "Agustus 2026",
    image: "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",
    excerpt: "Mempelajari Tailwind CSS dan juga Next.js.",
    content: "Awalnya saya merasa penulisan class di Tailwind CSS. Namun, kecepatan pembuatan antarmuka web meningkat drastis. Tidak perlu lagi memikirkan penamaan class yang rumit, dan fitur responsif bawaan membuat adaptasi tampilan mobile jadi jauh lebih mudah dan menyenangkan.",
  },
  {
    id: 2,
    title: "Pengalaman Bengkel",
    slug: "pengalaman-bengkel",
    date: "Oktober 2024",
    image: "https://www.mployee.id/wp-content/uploads/2023/06/mekanik-mobil.jpeg",
    excerpt: "Pengalaman Bengkel Motor",
    content: "Berawal dari hobi, udah 2 tahun fokus pegang spesialisasi bore up dan modifikasi mesin motor. Selalu utamain setelan presisi biar motor makin kenceng tapi tetep aman dipakai harian.",
  },
  {
    id: 3,
    title: "Pengalaman Coding memakai HTML dan CSS di kelas 10",
    slug: "pengalaman-html-css",
    date: "September 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    excerpt: "Belajar Tentang HTML dan CSS Pertama Kali di Kelas 10",
    content: "Anak kelas 10 RPL yang lagi fokus naklukin HTML dan CSS. Dari yang awalnya bingung sama susunan tag dan styling, sekarang udah mulai terbiasa bikin layout web sendiri dari nol.",
  },
];
