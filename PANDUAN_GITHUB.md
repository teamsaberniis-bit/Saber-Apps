# 🚀 Panduan Upload Proyek Portal Tim SABER ke GitHub

Proyek ini telah dibuat menggunakan **React + Vite + TypeScript + Tailwind CSS** dan dilengkapi dengan **PWA (Progressive Web App)** serta konfigurasi pembuatan file APK Android.

---

## 📌 CARA 1: Cara Paling Mudah (GitHub Desktop)

Jika Anda tidak terbiasa dengan Terminal/CMD:

1. Unduh dan pasang aplikasi resmi **[GitHub Desktop](https://desktop.github.com/)**.
2. Buka GitHub Desktop lalu login dengan akun GitHub Anda (`teamsaberniis@gmail.com`).
3. Pilih menu **File** > **Add Local Repository...** (atau tekan `Ctrl + O`).
4. Arahkan ke folder proyek ini di komputer Anda.
5. Jika muncul pesan *"This directory does not appear to be a Git repository"*, klik tautan **"create a repository"**.
6. Klik tombol **Publish Repository** di pojok kanan atas.
7. Beri nama repositori, contoh: `portal-tim-saber-apk`.
8. Klik **Publish Repository**. Selesai! Kode Anda sudah tampil di GitHub.

---

## 💻 CARA 2: Melalui Terminal / Command Prompt (Git CLI)

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka browser dan login ke **[GitHub.com](https://github.com/)**.
2. Klik ikon `+` di kanan atas, pilih **New repository**.
3. Isi nama repositori: `portal-tim-saber`.
4. Pilih **Public** (atau Private sesuai kebutuhan).
5. **Jangan** centang "Add a README file" (karena kita sudah punya kodenya).
6. Klik tombol hijau **Create repository**.
7. Salin URL repositori Anda, misalnya: `https://github.com/USER_ANDA/portal-tim-saber.git`.

### Langkah 2: Jalankan Perintah Git di Folder Proyek
Buka Terminal / Git Bash / Command Prompt di dalam folder proyek ini, lalu jalankan perintah berikut secara berurutan:

```bash
# 1. Inisialisasi git lokal
git init

# 2. Tambahkan semua file ke git
git add .

# 3. Buat commit pertama
git commit -m "feat: Portal Tim SABER Android APK App"

# 4. Ubah nama branch utama menjadi main
git branch -M main

# 5. Hubungkan ke repositori GitHub Anda (ganti URL di bawah dengan URL repo Anda)
git remote add origin https://github.com/USERNAME_ANDA/portal-tim-saber.git

# 6. Upload (push) kode ke GitHub
git push -u origin main
```

---

## 🌐 CARA 3: Aktifkan GitHub Pages (Agar Web & PWA Android Bisa Diakses Online Gratis)

Setelah kodenya masuk ke GitHub, Anda bisa meng-online-kannya secara gratis:

1. Di repositori GitHub Anda, buka tab **Settings** > **Pages**.
2. Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
3. Klik opsi **Static HTML** atau konfigurasi workflow Vite.
4. Atau deploy gratis dan otomatis 1-klik melalui **[Vercel](https://vercel.com/)** atau **[Netlify](https://netlify.com/)**:
   - Login ke Vercel/Netlify dengan akun GitHub Anda.
   - Klik **Add New Project** > pilih repositori `portal-tim-saber`.
   - Klik **Deploy**.
   - Anda langsung mendapatkan domain HTTPS gratis (misal: `https://portal-tim-saber.vercel.app`).
   - Domain HTTPS tersebut langsung siap diinstall sebagai APK Android di HP seluruh anggota tim!
