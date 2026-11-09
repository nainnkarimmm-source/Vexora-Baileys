# Panduan Kontribusi

Terima kasih ingin berkontribusi pada Vexora Baileys!

## Sebelum membuat perubahan

1. Baca README dan catatan atribusi.
2. Periksa isu yang sudah ada agar tidak membuat laporan duplikat.
3. Untuk perubahan besar, buka diskusi/issue terlebih dahulu.
4. Pastikan perubahan tetap menghormati lisensi dan atribusi upstream.

## Alur kontribusi

1. Fork repositori.
2. Buat branch baru: `git switch -c feature/nama-perubahan`.
3. Buat perubahan sekecil dan sejelas mungkin.
4. Jalankan pemeriksaan proyek yang tersedia, misalnya `yarn lint`, `yarn test`, dan `yarn build`.
5. Buka Pull Request dengan ringkasan, alasan, cara pengujian, dan dampak kompatibilitas.

## Standar

- Gunakan TypeScript sesuai gaya proyek upstream.
- Jangan memasukkan kredensial, file autentikasi, nomor telepon, atau data pribadi.
- Tambahkan atau perbarui tes untuk perubahan perilaku.
- Hindari perubahan protokol yang tidak terdokumentasi tanpa bukti dan pengujian.
- Jangan menambahkan fitur untuk spam, penguntitan, pemantauan tersembunyi, atau pengiriman pesan tanpa persetujuan.

## Pull Request

Jelaskan:
- Apa yang diubah?
- Mengapa perubahan diperlukan?
- Bagaimana cara mengujinya?
- Apakah ada perubahan API atau breaking change?
- Apakah perubahan ini berasal dari upstream atau dikembangkan khusus untuk Vexora?
