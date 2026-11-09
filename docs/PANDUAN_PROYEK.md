# Panduan Proyek Vexora Baileys

## 1. Apa itu Vexora Baileys?

Vexora Baileys adalah fork library Baileys. Library ini menyediakan antarmuka pemrograman untuk berinteraksi dengan WhatsApp Web melalui koneksi WebSocket. Proyek ini ditujukan untuk pengembang yang membangun aplikasi sendiri.

## 2. Sinkronisasi dengan upstream

Repositori sumber resmi: `https://github.com/WhiskeySockets/Baileys`

Tambahkan remote upstream satu kali:

```bash
git remote add upstream https://github.com/WhiskeySockets/Baileys.git
git fetch upstream
```

Untuk melihat perubahan upstream:

```bash
git log --oneline HEAD..upstream/master
```

Sebelum menggabungkan perubahan:

```bash
git merge upstream/master
```

Selesaikan konflik secara manual, jalankan tes dan build, lalu tinjau kembali atribusi serta changelog. Jangan melakukan force-push ke branch utama repositori publik.

## 3. Pengembangan lokal

Ikuti package manager dan versi runtime yang ditetapkan upstream. Periksa file `package.json`, `.yarnrc.yml`, dan `engine-requirements.js`.

Perintah yang umumnya digunakan pada proyek upstream dapat mencakup:

```bash
corepack enable
yarn install
yarn lint
yarn test
yarn build
```

Jika suatu perintah tidak tersedia pada versi yang kamu fork, ikuti script yang tercantum di `package.json`.

## 4. Rilis

Sebelum rilis:
- Pastikan build dan tes berhasil.
- Tinjau perubahan API.
- Perbarui changelog.
- Pastikan versi paket belum pernah dipakai.
- Pastikan nama paket npm berada dalam kendali pemilik proyek.
- Pertahankan file lisensi dan atribusi upstream.
- Jangan menyertakan kredensial atau data autentikasi.

## 5. Batasan

Baileys berinteraksi dengan layanan WhatsApp Web yang dapat berubah sewaktu-waktu. Kompatibilitas tidak dijamin. Pengguna bertanggung jawab mematuhi ketentuan layanan dan hukum yang berlaku.
