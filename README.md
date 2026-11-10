# Mashimaro Financial — PWA

Aplikasi pencatatan keuangan pribadi & usaha dengan strategi alokasi anggaran, laporan bulanan, dan **mode offline**. Bisa dipasang (install) di Android, iPhone, dan desktop.

## Cara membuka

- Jalankan server lokal: buka PowerShell di folder ini, lalu
  ```powershell
  powershell -ExecutionPolicy Bypass -File serve.ps1
  ```
  lalu akses `http://127.0.0.1:4173/`
- Atau unggah seluruh isi folder ini ke hosting HTTPS (lihat bagian **Deploy**), lalu buka tautannya di HP.
- `index.html` tidak bisa dipasang sebagai PWA jika dibuka langsung lewat `file://` — perlu HTTPS atau `localhost`.

## Fitur

1. **Beranda** — saldo, pemasukan/pengeluaran bulan berjalan, ringkasan alokasi (donut + nominal), transaksi terbaru, kartu pemasangan aplikasi.
2. **Pemasukan & Pengeluaran** — daftar per bulan, filter kategori, tambah/ubah/hapus transaksi, tambah kategori langsung dari layar transaksi.
3. **Strategi Alokasi** — 4 pos (cicilan, operasional, tabungan, dana darurat), slider & input persen, validasi total 100%, nominal otomatis dari pemasukan. Default 20/50/10/20. Setelah disimpan muncul banner konfirmasi di layar.
4. **Laporan bulanan** — hasil alokasi (anggaran vs terpakai vs sisa), mapping otomatis bulan berikutnya, perbandingan bulan lalu vs bulan berjalan (grafik + tabel), unduh CSV, dan **cetak PDF A4**.
5. **Cetak PDF** — dokumen A4 terpisah: ringkasan Kredit/Debit, hasil alokasi, mapping bulan depan, perbandingan, lalu halaman **detail Pemasukan (Kredit)** dan **detail Pengeluaran (Debit)** dengan subtotal dan kolom angka rata kanan.
6. **Pengaturan** — status/pemasangan aplikasi, info mode offline, kelola kategori, muat data contoh, hapus semua transaksi, reset semua data.
7. **Navigasi bulan** — semua layar mengikuti periode yang dipilih.
8. **Shortcut** — `?tab=income`, `?tab=expense`, `?tab=report` membuka tab tertentu (dipakai shortcut ikon aplikasi).

Semua data disimpan di `localStorage` (key `mashimaro.fin.v1`) di perangkat, tidak dikirim ke server.

## PWA & mode offline

- `manifest.webmanifest` — nama, ikon 192/512/maskable, `display: standalone`, warna tema `#0FA98F`.
- `sw.js` — service worker:
  - navigasi: network-first, fallback ke app shell saat offline atau server error;
  - `app.js`/`styles.css`/manifest: network-first agar update langsung terpakai;
  - gambar: cache-first;
  - font Google: runtime cache.
- Setelah halaman dibuka sekali, aset tersimpan di cache sehingga aplikasi tetap terbuka dan berfungsi tanpa internet.
- Data tetap bisa dibaca/diubah saat offline dan tersimpan di perangkat.

### Pasang di Android (Chrome)

1. Buka tautan aplikasi (harus `https://`).
2. Ketuk menu **⋮** kanan atas → **Instal aplikasi** / **Tambahkan ke layar utama**.
3. Konfirmasi. Ikon **Mashimaro** muncul di layar utama dan terbuka tanpa address bar.

### Pasang di iPhone/iPad (Safari)

1. Buka tautan aplikasi di **Safari** (bukan Chrome).
2. Ketuk tombol **Bagikan** (kotak dengan panah ke atas).
3. Pilih **Tambahkan ke Layar Utama** → **Tambah**.
4. Ikon **Mashimaro** muncul di layar utama.

### Pasang di desktop (Chrome/Edge)

Klik ikon **instal** (monitor dengan panah) di kanan address bar, atau menu browser → **Instal Mashimaro Financial**.

> PWA hanya bisa dipasang dari `https://` atau `localhost`. Alamat `http://192.168.x.x` di jaringan lokal **tidak** memenuhi syarat pemasangan/service worker.

## Deploy (agar bisa dipasang di HP)

Pilih salah satu, semuanya gratis:

| Opsi | Langkah singkat |
| --- | --- |
| **Netlify Drop** (paling mudah) | Buka <https://app.netlify.com/drop>, seret folder `mashimaro-financial` (atau isi ZIP), tunggu, salin URL `https://...netlify.app`. |
| **Cloudflare Pages** | Dashboard → Workers & Pages → Create → Pages → Upload assets → unggah isi folder. |
| **GitHub Pages** | Buat repo, unggah semua file, Settings → Pages → Deploy from branch → root. |
| **Vercel** | Import project statis, framework **Other**, tanpa build command. |

Setelah dapat URL HTTPS, buka di HP dan ikuti langkah pemasangan di atas. Tidak perlu build step — ini aplikasi statis.

## Struktur

```
index.html              struktur app & meta PWA
styles.css              design system, tampilan, gaya cetak A4
app.js                  state, seed data demo, render, interaksi, PWA
manifest.webmanifest    manifest aplikasi
sw.js                   service worker offline
icon-*.png              ikon 192/512/maskable
apple-touch-icon.png    ikon iOS
favicon-32.png          favicon
serve.ps1               server statis lokal (opsional)
README.md               dokumen ini
```

## Catatan desain

- Nama & brand: **Mashimaro Financial**
- Warna utama teal `#0FA98F`, aksen coral `#F97362`, latar krem `#F5F3EE`
- Font: Plus Jakarta Sans
- Mobile-first, lebar app 430px dengan frame perangkat di desktop
- Data demo: 30 transaksi (bulan ini & bulan lalu) supaya laporan perbandingan langsung terlihat

## Pengembangan berikutnya

- Export/import JSON & backup otomatis
- Grafik tren multi-bulan, anggaran per pos per bulan
- Kunci PIN/biometrik
- Sinkronisasi cloud opsional
