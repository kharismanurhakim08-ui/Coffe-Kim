# coffe’Kim — Website Company Profile UMKM

Project UTS Digitalisasi UMKM oleh **Kharisma Nur Hakim** — Universitas Pamulang.

## Menjalankan website
1. Ekstrak folder project.
2. Buka `index.html` di browser, atau gunakan ekstensi Live Server di VS Code.
3. Website dibuat dengan HTML, CSS, dan JavaScript murni; tidak memakai framework atau website builder.

## Fitur JavaScript
- Navigasi mobile yang dapat dibuka/tutup.
- Dark/light mode.
- Filter kategori produk.
- Modal detail produk.
- Validasi form kontak di sisi browser.

## Struktur
- `index.html` — struktur dan konten halaman.
- `style.css` — desain pastel responsif.
- `script.js` — interaksi website.
- `assets/` — gambar produk dan hero.

## Sebelum dipublikasikan
- Pastikan produk, harga, jam operasional, area layanan, dan foto sesuai bisnis sebenarnya.
- Ganti URL tombol Shopee dengan URL toko setelah toko Shopee benar-benar dibuat. Saat ini tombol mengarah ke pencarian username `kharismanurhakim`, bukan mengklaim toko sudah aktif.
- Tambahkan alamat lengkap dan akun media sosial resmi jika sudah tersedia.
- Form kontak saat ini hanya melakukan validasi demo; belum mengirim pesan ke server.

## Deploy ke Vercel
1. Buat repository baru di GitHub dan upload seluruh isi folder ini.
2. Login ke Vercel, pilih **Add New → Project**, lalu import repository.
3. Untuk website statis HTML, biarkan framework preset **Other**; build command dan output directory dapat dikosongkan/default.
4. Klik Deploy. Salin URL live website untuk pengumpulan.

## GitHub singkat
```bash
git init
git add .
git commit -m "Initial coffeKim UMKM website"
git branch -M main
git remote add origin https://github.com/USERNAME/coffekim-website.git
git push -u origin main
```
Ganti `USERNAME` dengan username GitHub milikmu.
