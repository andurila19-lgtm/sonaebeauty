# 🌸 BUKU PANDUAN PENGGUNAAN & OPERASIONAL SISTEM
## Sonae Beauty Studio Madiun — Hair Sanctuary & Beauty Care

> **Versi Dokumen:** 1.0.0  
> **Tanggal Rilis:** September 2025  
> **Website Resmi:** [https://sonaebeauty.reaksy.com](https://sonaebeauty.reaksy.com)  
> **Lokasi Studio:** Jl. Thamrin, Klegen, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63117  
> **WhatsApp Hotline:** +62 857-4346-3333  
> **Tagline Resmi:** `#semuaberhakcakep`

---

## DAFTAR ISI

1. [Ringkasan Eksekutif & Identitas Studio](#1-ringkasan-eksekutif--identitas-studio)
2. [Arsitektur Sistem Reservasi Ganda (Dual-Channel)](#2-arsitektur-sistem-reservasi-ganda-dual-channel)
   - [Opsi A: Jalur Dashboard Admin (Rekomendasi)](#opsi-a-jalur-dashboard-admin-rekomendasi)
   - [Opsi B: Jalur WhatsApp OpenGraph Manual](#opsi-b-jalur-whatsapp-opengraph-manual)
3. [Panduan Pengguna (Pelanggan / Tamu Salon)](#3-panduan-pengguna-pelanggan--tamu-salon)
   - [Alur 4 Langkah Melakukan Reservasi](#alur-4-langkah-melakukan-reservasi)
   - [Tiket Reservasi Digital & Kode Unik](#tiket-reservasi-digital--kode-unik)
   - [Fitur Pelacakan "Cari Booking Anda"](#fitur-pelacakan-cari-booking-anda)
4. [Panduan Operasional Resepsionis & Kasir (Portal Admin)](#4-panduan-operasional-resepsionis--kasir-portal-admin)
   - [Akses Halaman Admin (`/admin`)](#akses-halaman-admin-admin)
   - [Memahami 5 Kartu Indikator Kinerja (KPIs)](#memahami-5-kartu-indikator-kinerja-kpis)
   - [Prosedur Konfirmasi Tamu 1-Klik via WhatsApp](#prosedur-konfirmasi-tamu-1-klik-via-whatsapp)
   - [Pencatatan Tamu Walk-in / Telepon Manual](#pencatatan-tamu-walk-in--telepon-manual)
   - [Perubahan Status Antrean Perawatan](#perubahan-status-antrean-perawatan)
   - [Pencetakan Rekapan & Ekspor Data](#pencetakan-rekapan--ekspor-data)
5. [Spesifikasi Metadata OpenGraph & SEO Lokal (GEO & AEO)](#5-spesifikasi-metadata-opengraph--seo-lokal-geo--aeo)
6. [Pemeliharaan Teknis & Manajemen Data](#6-pemeliharaan-teknis--manajemen-data)

---

## 1. RINGKASAN EKSEKUTIF & IDENTITAS STUDIO

Sonae Beauty Studio Madiun adalah studio perawatan rambut dan kecantikan modern yang menghadirkan standar salon premium Korea dan Jepang ke Kota Madiun. Sistem website Sonae dibangun menggunakan teknologi web performa tinggi (Astro 7 + Tailwind CSS v4) dengan fitur unggulan:

* **Sistem Reservasi Tanpa DP**: Memberikan kemudahan bagi pelanggan untuk menjadwalkan kunjungan tanpa hambatan transfer uang muka.
* **Dual Channel Booking**: Opsi fleksibel bagi tamu untuk masuk ke antrean database admin atau berkonsultasi langsung melalui WhatsApp.
* **Privasi Maksimal (Ladies Room)**: Fasilitas khusus hijab-friendly dan privat room yang dapat dipilih saat reservasi.
* **Portal Admin Mandiri**: Dashboard antrean real-time berbasis browser tanpa ketergantungan server database rumit.

---

## 2. ARSITEKTUR SISTEM RESERVASI GANDA (DUAL-CHANNEL)

Untuk mengakomodasi kebiasaan pelanggan yang berbeda-beda, Sonae Beauty Studio menerapkan dua jalur reservasi yang dapat dipilih tamu pada Langkah 3 formulir booking:

### Opsi A: Jalur Dashboard Admin (Rekomendasi)
* **Karakteristik**: Data reservasi secara otomatis tercatat di sistem browser salon (`localStorage`).
* **Keunggulan**:
  1. Tamu langsung mendapatkan **Tiket Digital** resmi dengan nomor registrasi unik (misal: `SN-20251018-8421`).
  2. Resepsionis dapat melihat antrean secara langsung di `/admin`.
  3. Tamu tetap memiliki opsi menekan tombol *"Kirim Notifikasi Cepat ke WhatsApp"* jika ingin menyapa admin.

### Opsi B: Jalur WhatsApp OpenGraph Manual
* **Karakteristik**: Sistem memformat seluruh pilihan perawatan tamu menjadi format teks WhatsApp yang rapi dan elegan, lengkap dengan tautan OpenGraph.
* **Keunggulan**:
  1. Saat tautan dikirimkan ke nomor WhatsApp Studio, WhatsApp secara otomatis memunculkan **Rich Preview Card** (gambar headline studio, logo, judul, dan deskripsi profesional).
  2. Sangat cocok bagi tamu yang ingin berkonsultasi custom hair coloring, kondisi rambut rusak, atau meminta saran terapis terlebih dahulu.

---

## 3. PANDUAN PENGGUNA (PELANGGAN / TAMU SALON)

### Alur 4 Langkah Melakukan Reservasi:
1. **Langkah 1: Pilih Perawatan**
   - Kunjungi menu **Buat Janji** (`/booking`).
   - Pilih satu atau lebih perawatan dari 4 kategori: *Hair Care & Smoothing*, *Nail Art & Spa*, *Lash & Brow*, atau *Special Treatment*.
   - Total estimasi biaya dan waktu pengerjaan akan diperbarui secara dinamis di kotak ringkasan sebelah kanan/bawah.
2. **Langkah 2: Pilih Jadwal & Waktu**
   - Pilih hari dan tanggal kunjungan yang diinginkan.
   - Pilih salah satu slot waktu yang tersedia: `10:00 WIB`, `11:30 WIB`, `13:00 WIB`, `14:30 WIB`, `16:00 WIB`, atau `17:00 WIB`.
3. **Langkah 3: Pilih Jalur Konfirmasi**
   - Pilih antara **"Masuk Dashboard Admin"** (Tiket instan) atau **"Chat WhatsApp Manual"**.
4. **Langkah 4: Data Diri & Konfirmasi**
   - Masukkan nama lengkap, nomor WhatsApp aktif, dan catatan khusus (misal: request terapis tertentu atau request ruangan Ladies Room).
   - Klik tombol **"Konfirmasi Reservasi Sekarang"**.

### Tiket Reservasi Digital & Kode Unik
Setelah reservasi berhasil disimpan, jendela tiket digital akan terbuka dengan informasi:
* **Kode Booking**: `SN-YYYYMMDD-XXXX` (contoh: `SN-20251018-8421`).
* **Jadwal Datang**: Hari, Tanggal, dan Jam kedatangan.
* **Rincian Layanan & Estimasi Total**: Transparan tanpa biaya tersembunyi.
* **Aksi Cepat**: Tombol *Salin Kode*, *Cetak Tiket*, dan *Buka WhatsApp Admin*.

### Fitur Pelacakan "Cari Booking Anda"
Tamu yang sudah pernah melakukan reservasi dapat melacak status booking kapan saja:
1. Buka halaman Beranda (`/`).
2. Klik tombol kaca pembesar (Search Icon) di sebelah tombol "Buat Janji Sekarang".
3. Masukkan nomor WhatsApp, kode booking (`SN-...`), atau nama.
4. Klik **Cari**. Sistem akan menampilkan kartu status:
   - Status: **Menunggu Konfirmasi**, **Terkonfirmasi**, atau **Selesai**.
   - Tombol cepat menghubungi WhatsApp admin salon.

---

## 4. PANDUAN OPERASIONAL RESEPSIONIS & KASIR (PORTAL ADMIN)

### Akses & Login Halaman Admin (`/admin`)
Portal Admin dilindungi halaman login keamanan. Akses melalui URL:
`https://sonaebeauty.reaksy.com/admin` atau melalui tautan *"Portal Admin"* di Footer website.

* **Kredensial Login Resmi:**
  - **Username:** `admin` (atau `kasir`)
  - **Password:** `sonae2025`
  *(Tersedia tombol "Isi Otomatis & Langsung Masuk" untuk kemudahan staf kasir).*

### Memahami 5 Kartu Indikator Kinerja (KPIs):
1. **Total Reservasi**: Total sesi reservasi yang tercatat dalam sistem.
2. **Menunggu Konfirmasi**: Jumlah reservasi yang baru masuk dan memerlukan aksi verifikasi dari kasir.
3. **Dikonfirmasi**: Jumlah tamu yang sudah diverifikasi dan siap hadir sesuai jadwal.
4. **Selesai**: Tamu yang perawatannya telah selesai dilakukan di studio.
5. **Estimasi Omset**: Total nilai transaksi terjadwal dari seluruh reservasi yang aktif.

### Prosedur Konfirmasi Tamu 1-Klik via WhatsApp:
1. Temukan nama tamu yang berstatus *Menunggu Konfirmasi*.
2. Klik tombol hijau berlogo WhatsApp (`chat`) di kolom paling kanan.
3. Sistem secara otomatis membuka WhatsApp Web atau aplikasi WhatsApp dengan pesan sopan siap kirim:
   > *"Halo Kak [Nama Tamu]! 👋 Kami dari Sonae Beauty Studio Madiun. Mengenai reservasi perawatan: Kode SN-..., Jadwal: ... Layanan: ... Status reservasi Anda telah TERKONFIRMASI. Kami siap menyambut kehadiran Anda di studio kami di Jl. Thamrin, Madiun! ✨"*
4. Ubah dropdown status di tabel menjadi **Terkonfirmasi**.

### Pencatatan Tamu Walk-in / Telepon Manual:
Jika ada tamu yang datang langsung ke studio atau memesan lewat panggilan telepon:
1. Klik tombol **"+ Reservasi Manual"** di pojok kanan atas dashboard.
2. Isi nama tamu, nomor telepon, tanggal, jam, dan perawatan utama.
3. Pilih status awal (biasanya langsung *Terkonfirmasi*).
4. Klik **"Simpan Reservasi"**. Kode reservasi unik otomatis diterbitkan.

### Pencetakan Rekapan & Ekspor Data Excel:
* **Tombol Ekspor Excel (.xlsx):** Mengunduh seluruh arsip data reservasi dalam format lembar kerja **Microsoft Excel (.xlsx)** dengan lebar kolom proporsional dan format mata uang rupiah. Juga tersedia opsi format **CSV (UTF-8 BOM)** dan **JSON**.
* **Tombol Cetak Rekap:** Untuk mencetak daftar jadwal dan antrean harian ke printer kasir / printer A4.
* **Tombol Keluar (Logout):** Menutup sesi kasir secara aman dan kembali ke halaman login.

---

## 5. SPESIFIKASI METADATA OPENGRAPH & SEO LOKAL (GEO & AEO)

Sistem telah dioptimalkan secara mendalam untuk mesin pencari (Google AI Overviews, Perplexity) dan bot pratinjau media sosial:

* **OpenGraph Image**: Menggunakan banner rasio 1200x630px yang tajam (`/images/headline_models.png`).
* **Canonical URL**: Terkunci ke domain `https://sonaebeauty.reaksy.com`.
* **Schema.org Structured Data**: Tipe `HairSalon` lengkap dengan koordinat latitude `-7.6307637` dan longitude `111.532938`, nomor telepon resmi, dan jam buka.

---

## 6. PEMELIHARAAN TEKNIS & MANAJEMEN DATA

* **Penyimpanan Lokal (Local Storage)**: Data tersimpan aman di browser perangkat kasir dengan kunci `sonae_bookings`.
* **Backup Berkala**: Disarankan kepada kasir untuk menekan tombol **"Ekspor Data"** seminggu sekali atau di akhir bulan untuk mengarsipkan data riwayat pelanggan.
* **Pembersihan Cache**: Jika browser kasir dibersihkan (Clear Cookies/Site Data), cukup tekan tombol **"+ Data Contoh"** untuk memulihkan sampel awal atau muat ulang arsip backup JSON.

---
*© 2025 Sonae Beauty Studio Madiun. Seluruh hak cipta dilindungi undang-undang.*
