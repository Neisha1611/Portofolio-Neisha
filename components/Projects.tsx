import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

const projects = [
  {
    number: "01",
    tag: "NLP / Machine Learning",
    title: "Analisis Sentimen Ulasan Pengguna Aplikasi Shopee menggunakan Naive Bayes Multinomial",
    summary:
      "Mengklasifikasikan sentimen ulasan pengguna Shopee di Google Play Store menggunakan Natural Language Processing.",
    notes: [
      "Dataset ulasan berbahasa Indonesia dari Kaggle, diproses melalui cleaning, tokenization, normalisasi, stopword removal, dan stemming.",
      "Fitur teks direpresentasikan dengan TF-IDF, ketidakseimbangan data ditangani dengan RandomOverSampler.",
      "Model dievaluasi dengan accuracy, precision, recall, F1-score, confusion matrix, dan visualisasi word cloud.",
    ],
    stats: ["Akurasi 81.65%", "F1-score 81%", "3.444 fitur TF-IDF"],
    links: [
      { label: "Dokumentasi", href: "https://drive.google.com/file/d/1MYjjmv0YfUi8SVzwukc-R5KJEwWrCpI_/view?usp=sharing" },
      { label: "Kode", href: "https://colab.research.google.com/drive/1cKWeTFthJLSpvZ6gEAPtfd61gcqnGWfW?usp=sharing" },
    ],
    images: [
      { src: "/proj1-confusion-matrix.png", caption: "Confusion matrix" },
      { src: "/proj1-classification-report.png", caption: "Classification report" },
    ],
  },
  {
    number: "02",
    tag: "Data Clustering",
    title: "Segmentasi Ketergantungan Mahasiswa FASILKOM terhadap Generative AI menggunakan K-Means Clustering",
    summary:
      "Menganalisis pola penggunaan Generative AI pada mahasiswa Fakultas Ilmu Komputer Universitas Jember dari 53 responden.",
    notes: [
      "Data preprocessing meliputi validasi data, ordinal encoding, dan normalisasi dengan StandardScaler.",
      "K-Means Clustering mengelompokkan mahasiswa berdasarkan frekuensi, durasi, dan tingkat pemahaman awal.",
      "Jumlah klaster optimal ditentukan dengan Elbow Method dan dievaluasi dengan Silhouette Score.",
    ],
    stats: ["53 responden", "3 klaster", "Elbow + Silhouette Score"],
    links: [
      { label: "Dokumentasi", href: "https://drive.google.com/file/d/1hTffnn62_WZO_6SirXkN_hXJ58ONquLV/view?usp=sharing" },
      { label: "Kode", href: "https://colab.research.google.com/drive/1Ih_OUvEfPk0YX2GkzzMGBYR39fc2rxmN?usp=sharing" },
    ],
    images: [
      { src: "/proj2-elbow-method.png", caption: "Elbow method" },
      { src: "/proj2-cluster-scatter.png", caption: "Scatter plot" },
    ],
  },
  {
    number: "03",
    tag: "System Design & Database",
    title: "Sistem Informasi Manajemen Layanan & Transaksi Laundry pada De Laundry",
    summary:
      "Merancang sistem informasi untuk mendigitalisasi pencatatan transaksi laundry yang sebelumnya dilakukan secara manual.",
    notes: [
      "Requirement analysis, pemodelan proses bisnis, use case, dan rancangan antarmuka pengguna.",
      "Perancangan basis data dengan ERD & Physical Data Model, diimplementasikan dengan PostgreSQL (DDL & query SQL).",
      "Prototype aplikasi mendukung registrasi, pemesanan, pembayaran, pelacakan status cucian, dan pengelolaan transaksi admin.",
    ],
    stats: ["ERD & PDM", "PostgreSQL", "Prototype Admin & Pelanggan"],
    links: [
      { label: "Dokumentasi", href: "https://drive.google.com/file/d/16Tc6KpX9LfGYlx_AmLQwhZYjvaROVTFH/view?usp=sharing" },
    ],
    images: [
      { src: "/proj3-erd.png", caption: "Entity Relationship Diagram" },
      { src: "/proj3-physical-data-model.png", caption: "Physical Data Model" },
    ],
  },
];

export function Projects() {
  return (
    <RevealSection
      id="proyek"
      className="mx-auto w-full max-w-[1280px] px-[32px] py-[96px] max-lg:px-[24px] max-md:py-[72px]"
    >
      <RevealItem className="mb-[56px] max-w-[560px]">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--plum)]">Project</span>
      </RevealItem>

      <div className="flex flex-col gap-[28px]">
        {projects.map((project) => (
          <RevealItem
            key={project.number}
            className="group relative overflow-hidden rounded-[28px] bg-[var(--card)] shadow-[0_14px_40px_rgba(30,27,36,0.07)] transition hover:shadow-[0_26px_60px_rgba(30,27,36,0.13)]"
          >
            <span className="pointer-events-none absolute -right-[10px] -top-[36px] select-none font-heading text-[160px] font-bold leading-none text-[var(--paper)] max-md:text-[100px]">
              {project.number}
            </span>

            <div className="relative grid grid-cols-[1fr_1fr] gap-[44px] p-[36px] max-md:grid-cols-1 max-md:gap-[26px] max-md:p-[24px]">
              <div>
                <div className="mb-[14px] flex items-center gap-[10px]">
                  <span className="inline-flex items-center rounded-full bg-[var(--plum)] px-[13px] py-[6px] text-[11.5px] font-semibold text-white">
                    {project.tag}
                  </span>
                </div>
                <h3 className="mb-[14px] text-[23px] font-bold leading-[1.3] text-[var(--ink)]">{project.title}</h3>
                <p className="mb-[16px] text-[14px] leading-[1.6] text-[var(--ink-soft)]">{project.summary}</p>
                <div className="mb-[24px] space-y-[10px]">
                  {project.notes.map((note) => (
                    <div
                      key={note}
                      className="rounded-[14px] border border-[var(--rule)] bg-[var(--paper)] px-[18px] py-[14px] transition duration-300 hover:border-[var(--plum)]/30 hover:shadow-[0_8px_20px_rgba(30,27,36,0.05)]"
                    >
                      <p className="text-[14px] leading-[1.75] text-[var(--ink-soft)]">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mb-[22px] flex flex-wrap gap-[8px]">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-[var(--paper)] px-[13px] py-[7px] text-[12px] font-medium text-[var(--ink)]"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-[12px]">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-[6px] rounded-full bg-[var(--ink)] px-[18px] py-[10px] text-[12px] font-semibold text-white transition hover:bg-[var(--mint)] hover:text-[var(--mint-ink)]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-[13px] w-[13px] transition group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[16px] self-center">
                {project.images.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-[16px] bg-[var(--paper)] transition duration-300 group-hover:-translate-y-[2px]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.caption}
                        fill
                        sizes="260px"
                        className="object-contain p-[14px] transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <figcaption className="border-t border-[var(--rule)] bg-[var(--card)] px-[10px] py-[8px] text-center text-[11px] text-[var(--ink-soft)]">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
