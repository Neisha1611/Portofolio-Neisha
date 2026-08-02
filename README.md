# Portofolio — Neisha Qonita Nurul Izzah

Portofolio pribadi dibangun dengan Next.js (App Router), Tailwind CSS v4, dan
Framer Motion. Tampilannya terinspirasi dari layout & animasi
[rhdigital.co.uk](https://www.rhdigital.co.uk/) — hero berwarna solid dengan
judul bergilir (rotating headline), foto yang bleed ke tepi, kartu statistik
mengambang, tombol pill mint sebagai aksen utama, serta efek hero yang
mengecil & melengkung saat discroll (khusus desktop). Navbar & footer sudah
tersambung penuh ke setiap section, lengkap dengan indikator menu aktif yang
bergeser mulus mengikuti posisi scroll.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur

- `app/` — layout, halaman, dan `globals.css`
- `components/` — satu komponen per bagian (`Hero`, `About`, `Skills`,
  `Experience`, `Projects`, `Contact`, dst.)
- `public/` — foto profil dan gambar hasil proyek (confusion matrix, ERD,
  scatter plot, dll.)

## Mengganti konten

Sebagian besar teks dan data ada di dalam array di masing-masing komponen
(`components/Projects.tsx`, `components/Experience.tsx`,
`components/Skills.tsx`) sehingga tinggal disunting langsung tanpa perlu
menyentuh markup.
