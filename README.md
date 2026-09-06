# 🌸 Sonae Beauty Studio Madiun — Web App & Booking Management System

> **Website Resmi:** [https://sonaebeauty.reaksy.com](https://sonaebeauty.reaksy.com)  
> **Dokumentasi Resmi (PDF):** [PANDUAN_PENGGUNAAN_SONAE_BEAUTY.pdf](public/PANDUAN_PENGGUNAAN_SONAE_BEAUTY.pdf)  
> **Tagline:** `#semuaberhakcakep`  
> **Lokasi:** Jl. Thamrin, Klegen, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63117  
> **Hotline WhatsApp:** +62 857-4346-3333

---

## 📌 Fitur Utama

1. **Dual-Channel Reservation Engine (`/booking`)**:
   - **Opsi A (Dashboard Admin Web)**: Menyimpan reservasi secara instan ke sistem salon, menghasilkan **Digital Ticket** unik (`SN-YYYYMMDD-XXXX`), dan dapat diakses langsung oleh kasir.
   - **Opsi B (WhatsApp OpenGraph Manual)**: Mengirimkan format reservasi rapi ke WhatsApp salon dengan *Rich Link Preview* (OpenGraph 1200x630px gambar salon, judul, dan deskripsi).
2. **Dashboard Kasir & Manajemen Antrean (`/admin`)**:
   - 5 Metrik Utama (Total Reservasi, Menunggu Konfirmasi, Terkonfirmasi, Selesai, Estimasi Omset).
   - Filter cerdas (pencarian nama/kode, filter status, filter jalur).
   - **1-Klik Konfirmasi WhatsApp**: Mengirim pesan balasan resmi ke nomor pelanggan dalam 1 klik.
   - **Modal Walk-in**: Input cepat untuk tamu salon yang datang langsung tanpa booking online.
   - **Cetak Rekap & Ekspor Data (JSON)**.
   - **Unduh Panduan PDF Resmi**.
3. **Pencarian Tiket Tamu ("Cari Booking Anda")**:
   - Modal pencarian cepat di halaman utama (Beranda) yang mencari berdasarkan Nomor HP, Kode Booking, atau Nama.
4. **Ladies Room & Hijab-Friendly Showcase (`/ladies-room`)**:
   - Ruangan privat khusus wanita dengan kaca satu arah dan terapis wanita tersertifikasi.
5. **SEO, GEO & AEO Ready**:
   - Schema.org LocalBusiness `HairSalon` dengan titik koordinat peta Madiun.
   - OpenGraph Card & Twitter Card untuk visual link preview di WhatsApp, Telegram, Facebook, dan X.

---

## 🛠️ Stack Teknologi

- **Framework**: Astro 7.3 (Static Site Generation / High Performance)
- **Styling**: Tailwind CSS v4 + Custom Theme
- **Animations**: GSAP (GreenSock) + ScrollTrigger
- **Sliders**: Swiper JS
- **Typography**: Libre Baskerville (Serif) & Plus Jakarta Sans
- **Icons**: Google Material Symbols Outlined

---

## 🚀 Panduan Menjalankan Proyek

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build

# 4. Preview build produksi
npm run preview
```

---

## 📂 Struktur Rute & Halaman

| Halaman | Rute | Deskripsi |
|---|---|---|
| Beranda | `/` | Hero booking bar, pencarian booking, galeri, testimoni |
| Layanan | `/layanan` | Katalog lengkap perawatan rambut & kecantikan |
| Daftar Harga | `/harga` | Daftar harga transparan tanpa biaya tersembunyi |
| Ladies Room | `/ladies-room` | Area privat hijab-friendly salon |
| Booking | `/booking` | Formulir reservasi 4-langkah dengan Dual Channel |
| Admin | `/admin` | Dashboard antrean, status, WhatsApp 1-klik, ekspor |
| Galeri | `/galeri` | Foto hasil pengerjaan model salon |
| Artikel & Tips | `/artikel` | Edukasi perawatan rambut & kecantikan |
| Lokasi Studio | `/lokasi` | Alamat Jl. Thamrin, peta interaktif, & rute |
| Tentang Kami | `/tentang-kami` | Filosofi salon dan standar higienitas |

---

## 📄 Dokumentasi PDF

Dokumen panduan operasional lengkap untuk pemilik salon dan staf kasir tersedia dalam format PDF:
- Path: `public/PANDUAN_PENGGUNAAN_SONAE_BEAUTY.pdf`
- Unduh Langsung: [https://sonaebeauty.reaksy.com/PANDUAN_PENGGUNAAN_SONAE_BEAUTY.pdf](https://sonaebeauty.reaksy.com/PANDUAN_PENGGUNAAN_SONAE_BEAUTY.pdf)

---
*© 2025 Sonae Beauty Studio Madiun. All rights reserved.*
