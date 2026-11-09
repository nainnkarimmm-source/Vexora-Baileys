# Vexora Baileys

**Vexora Baileys** adalah fork komunitas dari [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys), sebuah library TypeScript/JavaScript berbasis WebSocket untuk berinteraksi dengan WhatsApp Web.

> [!IMPORTANT]
> Repositori ini adalah proyek independen dan tidak berafiliasi, didukung, atau disponsori oleh WhatsApp maupun Meta. WhatsApp adalah merek dagang pemiliknya.
>
> Vexora Baileys tidak menganjurkan spam, pesan massal yang tidak diminta, penguntitan, pemantauan tersembunyi, atau penggunaan yang melanggar ketentuan WhatsApp. Gunakan hanya pada akun dan percakapan yang memang kamu berwenang kelola.

## Tentang proyek

Vexora Baileys bertujuan menjaga kompatibilitas dengan proyek upstream sambil menyediakan dokumentasi berbahasa Indonesia, perbaikan yang ditinjau, dan kemudahan kontribusi untuk komunitas.

**Ini adalah library, bukan aplikasi bot siap pakai.** Pengembang menggunakannya sebagai dependensi dalam aplikasi mereka sendiri.

## Status

- Basis kode: fork dari WhiskeySockets/Baileys.
- Bahasa utama: TypeScript.
- Runtime: Node.js.
- Lisensi upstream: MIT. Pertahankan file `LICENSE` asli dan semua pemberitahuan hak cipta.
- Versi: ikuti versi upstream sampai perubahan Vexora memiliki proses rilis tersendiri.

## Persyaratan

Periksa `package.json` dan `engine-requirements.js` dari versi upstream yang sedang kamu fork untuk mengetahui versi Node.js, Yarn, dan Corepack yang tepat. Baileys 7 membawa perubahan yang tidak kompatibel dengan beberapa pola API versi sebelumnya; baca panduan migrasi sebelum memperbarui kode.

## Instalasi dari GitHub

```bash
git clone https://github.com/USERNAME/vexora-baileys.git
cd vexora-baileys
corepack enable
yarn install
yarn build
```

Ganti `USERNAME` dengan nama akun atau organisasi GitHub pemilik repositori.

## Instalasi sebagai dependensi

Setelah paket diterbitkan dengan nama npm yang sudah kamu kuasai:

```bash
npm install vexora-baileys
```

Nama `vexora-baileys` hanya nama paket yang disarankan. Pastikan nama tersebut tersedia di npm sebelum publikasi. Jika menggunakan scope, pastikan kamu memiliki scope itu.

## Contoh penggunaan

API dapat berubah mengikuti versi upstream. Contoh berikut hanya pola awal; cocokkan import dan opsi socket dengan dokumentasi versi yang dipakai.

```ts
import makeWASocket from 'vexora-baileys'

const sock = makeWASocket({
  // Isi opsi sesuai dokumentasi versi Baileys yang digunakan.
})

sock.ev.on('connection.update', (update) => {
  console.log('Pembaruan koneksi:', update)
})
```

Jangan memasukkan kredensial, file sesi, token, atau data pribadi ke repositori publik.

## Dokumentasi

- [Panduan proyek](docs/PANDUAN_PROYEK.md)
- [Kebijakan keamanan](SECURITY.md)
- [Panduan kontribusi](CONTRIBUTING.md)
- [Catatan atribusi fork](FORK-ATTRIBUTION.md)

Dokumentasi protokol dan API upstream: https://baileys.wiki/

## Melaporkan masalah

Sertakan versi Node.js, versi Vexora Baileys, langkah reproduksi, dan log yang sudah disamarkan. Jangan unggah file sesi atau informasi akun.

## Kredit

Vexora Baileys dibangun dari karya WhiskeySockets/Baileys. Terima kasih kepada para maintainer dan kontributor upstream. Lihat `FORK-ATTRIBUTION.md` dan file `LICENSE` asli untuk informasi lisensi.
