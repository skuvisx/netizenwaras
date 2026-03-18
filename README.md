# 🌐 NETIZEN WARAS
### Kampanye Edukasi Anti Cyberbullying

> *"Jempol cepat boleh. Tapi empati jangan sampai telat."*

---

## 👤 Informasi Mahasiswa

| Field | Info |
|---|---|
| **Nama** | Putra Dharma Prajna Adhitthana Bun |
| **NIM** | 32230161 |
| **Program Studi** | Informatika |
| **Universitas** | Universitas Bunda Mulia |
| **Email** | s32230161@student.ubm.ac.id |
| **Mata Kuliah** | UTS Project |

---

## 📋 Deskripsi Proyek

**Netizen Waras** adalah website kampanye edukasi interaktif yang bertujuan meningkatkan kesadaran masyarakat Indonesia tentang:
- Bahaya cyberbullying di media sosial
- Dampak psikologis terhadap korban
- Cara menjadi netizen yang bijak, berempati, dan bertanggung jawab

Website ini dibuat sebagai proyek UTS mata kuliah Informatika di Universitas Bunda Mulia.

---

## 🛠️ Tech Stack

| Teknologi | Fungsi |
|---|---|
| **Next.js 14** (App Router) | Framework utama |
| **React 18** | UI Library |
| **TailwindCSS** | Styling & responsive design |
| **Framer Motion** | Animasi & transisi |
| **Recharts** | Visualisasi data & chart |
| **Lucide React** | Icon library |

---

## 📁 Struktur Proyek

```
netizenwaras/
├── app/
│   ├── layout.js          # Root layout + metadata
│   ├── page.js            # Main page (assembles semua section)
│   └── globals.css        # Global styles + CSS variables
│
├── components/
│   ├── Navbar.jsx         # Navigation bar + dark mode toggle
│   └── Footer.jsx         # Footer + referensi
│
├── sections/
│   ├── HeroSection.jsx         # Landing page hero
│   ├── CampaignSection.jsx     # Aset kampanye (poster + video)
│   ├── AboutCyberbullying.jsx  # Definisi & jenis cyberbullying
│   ├── StatisticsSection.jsx   # Statistik & chart data
│   ├── CyberpsychologySection.jsx  # Teori psikologi online
│   ├── StorySimulation.jsx     # Simulasi cerita interaktif
│   ├── HeatmapToxicComments.jsx # Heatmap visualisasi komentar
│   ├── CommentSimulator.jsx    # Analisis toksisitas komentar
│   ├── TimelineSection.jsx     # Timeline sejarah cyberbullying
│   ├── QuizSection.jsx         # Quiz interaktif 4 soal
│   ├── TipsSection.jsx         # Tips menjadi netizen waras
│   └── CTASection.jsx          # Call to action + share
│
├── charts/
│   ├── CyberbullyingBarChart.jsx  # Bar chart platform
│   └── RolePieChart.jsx           # Pie chart distribusi peran
│
├── data/
│   ├── cyberbullyingStats.js   # Data statistik global & Indonesia
│   ├── toxicCommentsDataset.js # 103 komentar simulatif
│   └── timelineData.js         # 14 event timeline sejarah
│
├── utils/
│   └── toxicityAnalyzer.js    # Algoritma analisis toksisitas
│
├── public/
│   └── images/
│
├── package.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 CARA MENJALANKAN LOKAL

### Prasyarat
- **Node.js** versi 18 atau lebih baru ([download](https://nodejs.org))
- **npm** atau **yarn**

### Langkah-langkah

```bash
# 1. Clone atau ekstrak folder proyek
cd netizenwaras

# 2. Install semua dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
# http://localhost:3000
```

---

## 🌍 PANDUAN DEPLOY KE VERCEL (GRATIS)

### Opsi A: Deploy via GitHub + Vercel (Recommended)

#### Step 1 — Buat Akun Vercel
1. Buka [vercel.com](https://vercel.com)
2. Klik **Sign Up**
3. Pilih **Continue with GitHub**
4. Buat akun GitHub jika belum punya di [github.com](https://github.com)

#### Step 2 — Upload Proyek ke GitHub
1. Buka [github.com/new](https://github.com/new)
2. Buat repository baru, nama: `netizenwaras`
3. Set ke **Public**
4. Klik **Create repository**
5. Upload semua file proyek:
   - Klik **Add file → Upload files**
   - Drag & drop seluruh isi folder `netizenwaras/`
   - Commit dengan pesan: `Initial commit — Netizen Waras`

#### Step 3 — Deploy dari Vercel Dashboard
1. Buka [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klik tombol **+ New Project**
3. Pilih repository `netizenwaras` dari daftar
4. Vercel akan otomatis mendeteksi **Next.js**
5. Klik **Deploy**
6. Tunggu 1-2 menit → website live! 🎉

#### Step 4 — Dapatkan URL Website
Setelah deploy selesai, kamu akan mendapat URL seperti:
```
https://netizenwaras.vercel.app
```

---

### Opsi B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy dari folder proyek
cd netizenwaras
vercel

# Ikuti instruksi di terminal
# Pilih: No untuk existing project
# Project name: netizenwaras
# Framework: Next.js (auto-detected)
# Build command: npm run build
# Output directory: .next (default)

# Deploy ke production
vercel --prod
```

---

## 🌐 PANDUAN DOMAIN CUSTOM (NetizenWaras.id)

### Step 1 — Beli Domain .id
Daftar ke salah satu registrar domain Indonesia:

| Registrar | URL | Harga Estimasi |
|---|---|---|
| **Niagahoster** | niagahoster.co.id | ~Rp 50.000/tahun |
| **Hostinger** | hostinger.co.id | ~Rp 30.000/tahun |
| **IDWebHost** | idwebhost.com | ~Rp 45.000/tahun |
| **Domainesia** | domainesia.com | ~Rp 55.000/tahun |

1. Buka salah satu registrar di atas
2. Cari domain `netizenwaras.id`
3. Tambahkan ke keranjang & checkout
4. Lakukan pembayaran

### Step 2 — Tambahkan Domain di Vercel
1. Buka [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klik proyek `netizenwaras`
3. Buka tab **Settings → Domains**
4. Klik **Add Domain**
5. Ketik: `netizenwaras.id`
6. Klik **Add**
7. Vercel akan menampilkan **DNS Records** yang perlu dikonfigurasi:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Step 3 — Konfigurasi DNS di Registrar
1. Login ke panel kontrol registrar domain kamu
2. Buka **DNS Management / Zone Editor**
3. Tambahkan record berikut:
   ```
   A Record:
   Host: @  →  Value: 76.76.21.21  →  TTL: Auto
   
   CNAME Record:
   Host: www  →  Value: cname.vercel-dns.com  →  TTL: Auto
   ```
4. Simpan perubahan

### Step 4 — Verifikasi SSL (Otomatis)
- Vercel akan otomatis menerbitkan sertifikat **SSL/HTTPS** gratis
- Proses propagasi DNS: **5-48 jam**
- Setelah aktif, websitemu bisa diakses di:
  - `https://netizenwaras.id`
  - `https://www.netizenwaras.id`

---

## 📊 Fitur-Fitur Website

| Fitur | Deskripsi |
|---|---|
| 🎬 Campaign Assets | Preview poster & embed video kampanye |
| 📊 Statistics Charts | Bar chart & pie chart data cyberbullying |
| 🎭 Story Simulation | Cerita interaktif dengan pilihan bystander |
| 🗺️ Heatmap | Visualisasi 103 komentar berdasarkan toksisitas |
| 🔍 Comment Analyzer | Analisis real-time toksisitas komentar |
| 📅 Interactive Timeline | 14 event sejarah cyberbullying 1994-2024 |
| 🧠 Quiz | 4 pertanyaan + 3 kategori hasil (Toxic/Biasa/Waras) |
| 💡 Tips | 8 panduan praktis netizen sehat |
| 🌙 Dark Mode | Toggle dark/light mode |

---

## 📚 Referensi & Sumber Data

| Sumber | Konten |
|---|---|
| Statista Digital Media Report 2023 | Data platform cyberbullying |
| UNICEF Cyberbullying Study 2019 | Distribusi peran korban/pelaku/saksi |
| American Psychological Association 2022 | Dampak psikologis |
| Pew Research Center 2010 | Penggunaan media sosial & cyberbullying |
| WHO Digital Health Report 2023 | Pengakuan sebagai krisis mental health |
| Kominfo RI 2023 | Data cyberbullying Indonesia |
| KPAI 2022 | Data korban remaja Indonesia |
| Suler, J. (2004) CyberPsychology & Behavior | Online Disinhibition Effect |
| Google Perspective API Research | Metodologi deteksi toksisitas |
| Hinduja & Patchin, Cyberbullying Research Center | Definisi & statistik |
| UNESCO Global Report on Bullying 2021 | Dampak akademik |

---

## ⚠️ Disclaimer

Website ini dibuat untuk keperluan **akademik** (Proyek UTS). Semua komentar negatif dalam dataset `toxicCommentsDataset.js` bersifat **simulatif** dan dibuat semata-mata untuk tujuan edukasi dalam demonstrasi dampak cyberbullying. Konten ini tidak dimaksudkan untuk menyerang atau merepresentasikan individu manapun.

---

## 📄 Lisensi

MIT License — Bebas digunakan untuk tujuan pendidikan dengan menyertakan atribusi.

---

*Dibuat dengan 💜 oleh Putra Dharma Prajna Adhitthana Bun (NIM: 32230161) — Universitas Bunda Mulia 2024*
