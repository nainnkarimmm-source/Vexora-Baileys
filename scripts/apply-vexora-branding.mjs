/**
 * Terapkan metadata dasar Vexora ke package.json hasil fork.
 * Script ini tidak mengganti dependensi, script build, konfigurasi TypeScript,
 * maupun kode sumber upstream.
 *
 * Jalankan dari root repositori hasil fork:
 *   node scripts/apply-vexora-branding.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const packagePath = path.resolve('package.json')

if (!fs.existsSync(packagePath)) {
  console.error('package.json tidak ditemukan. Jalankan script dari root repositori.')
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

pkg.name = 'vexora-baileys'
pkg.description = 'Fork komunitas Vexora dari library Baileys untuk WhatsApp Web'
pkg.homepage = 'https://github.com/USERNAME/vexora-baileys'

pkg.repository = {
  type: 'git',
  url: 'https://github.com/USERNAME/vexora-baileys.git'
}

pkg.bugs = {
  url: 'https://github.com/USERNAME/vexora-baileys/issues'
}

fs.writeFileSync(packagePath, `${JSON.stringify(pkg, null, 2)}\\n`)
console.log('Metadata Vexora diterapkan. Ganti USERNAME dengan akun GitHub pemilik repositori.')
console.log('Pastikan nama paket npm tersedia dan berada dalam kendali kamu sebelum publish.')
