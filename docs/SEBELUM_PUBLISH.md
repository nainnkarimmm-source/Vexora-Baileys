# Checklist sebelum publikasi

- [ ] Fork repositori resmi WhiskeySockets/Baileys melalui GitHub.
- [ ] Clone fork milik sendiri, bukan salinan ZIP yang tidak memiliki riwayat Git upstream.
- [ ] Salin file dokumentasi dan folder `.github` dari kit ini ke root fork.
- [ ] Jalankan `node scripts/apply-vexora-branding.mjs`.
- [ ] Ganti `USERNAME` di `package.json` dengan akun/organisasi GitHub.
- [ ] Pastikan nama paket npm tersedia dan kamu memiliki hak untuk menerbitkannya.
- [ ] Pertahankan `LICENSE`, header hak cipta, serta atribusi upstream.
- [ ] Tinjau perubahan besar Baileys 7 dan panduan migrasinya.
- [ ] Jalankan lint, tes, dan build.
- [ ] Pastikan `.gitignore` mengecualikan file sesi dan kredensial.
- [ ] Tinjau README dan informasi lisensi sebelum membuat repositori publik.
