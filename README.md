# Portofolio — Neisha Qonita Nurul Izzah

Portofolio pribadi dibangun dengan Next.js (App Router), Tailwind CSS v4, dan
Framer Motion. 

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
