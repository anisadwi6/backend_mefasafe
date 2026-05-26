# MefaSafe — Digital Insurance Platform

[![Laravel](https://img.shields.io/badge/Laravel-11.x-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-22C55E?style=flat-square)](LICENSE)

> Platform asuransi kesehatan digital yang menyediakan manajemen polis, klaim digital, konsultasi dokter, kalender pengingat kesehatan, dan layanan terintegrasi berbasis web.

---

## 📋 Daftar Isi

- [Deskripsi](#-deskripsi)
- [Arsitektur Sistem](#-arsitektur-sistem)
- [Tech Stack](#-tech-stack)
- [Fitur Utama](#-fitur-utama)
- [Struktur Project](#-struktur-project)
- [Database Schema](#-database-schema)
- [Instalasi](#-instalasi)
- [API Endpoints](#-api-endpoints)
- [Tim Pengembang](#-tim-pengembang)
- [Changelog](#-changelog)

---

## 📖 Deskripsi

MefaSafe adalah prototype solusi digital dalam sektor **InsurTech** yang dikembangkan untuk meningkatkan transparansi dan kemudahan dalam pengelolaan asuransi kesehatan secara online.

### 🎯 Tujuan Utama

| # | Tujuan |
|---|--------|
| 1 | Meningkatkan transparansi pembelian dan pengelolaan produk asuransi |
| 2 | Menghadirkan pencatatan klaim digital yang akurat dan real-time |
| 3 | Menyediakan konsultasi dokter online (chat & video call) |
| 4 | Membantu pengguna mengatur jadwal kesehatan dengan kalender pengingat |
| 5 | Membangun kepercayaan konsumen melalui keamanan data yang transparan |

---

## 🏗 Arsitektur Sistem

```
┌──────────────────┐        REST API        ┌──────────────────┐        MySQL        ┌──────────────┐
│                  │ ◄────────────────────► │                  │ ◄─────────────────► │              │
│  React + Vite    │                        │   Laravel 11     │                     │   Database   │
│   (Frontend)     │     Bearer Token       │   (Backend API)  │     Eloquent ORM    │   (MySQL)    │
│                  │                        │                  │                     │              │
└──────────────────┘                        └──────────────────┘                     └──────────────┘
```

### Alur Autentikasi

```
User → Login/Register → Laravel Sanctum → Bearer Token → localStorage → API Requests
```

---

## 🛠 Tech Stack

### Backend
| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| Laravel | 11.x | Framework PHP utama |
| PHP | 8.2+ | Bahasa pemrograman |
| MySQL | 8.0+ | Database relasional |
| Laravel Sanctum | — | Token-based authentication |
| Carbon | — | Manipulasi tanggal & waktu |
| Gemini AI API | Pro | Chatbot AI (MefaBot) |

### Frontend
| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| React | 19.x | UI library |
| Vite | 8.x | Build tool & dev server |
| Tailwind CSS | 4.x | Utility-first styling |
| React Router DOM | 7.x | Client-side routing |
| Axios | 1.x | HTTP client |
| Lucide React | — | Icon library |
| Leaflet | 1.x | Peta interaktif (lokasi RS) |

---

## ⚡ Fitur Utama

### Pengguna

| Fitur | Deskripsi | Status |
|-------|-----------|:------:|
| 🔐 **Autentikasi** | Registrasi, login, dan manajemen sesi | ✅ |
| 🏠 **Dashboard** | Ringkasan saldo, polis aktif, dan statistik | ✅ |
| 📜 **Manajemen Polis** | Lihat dan kelola polis asuransi aktif | ✅ |
| 💰 **Klaim Asuransi** | Pengajuan klaim dengan upload dokumen | ✅ |
| 👨‍⚕️ **Konsultasi Dokter** | Chat & video call dengan dokter spesialis | ✅ |
| 🏥 **Daftar Rumah Sakit** | Cari RS mitra dengan peta interaktif | ✅ |
| 📋 **Pendaftaran RS** | Daftar antrian online dengan barcode | ✅ |
| 📊 **Riwayat Transaksi** | Histori klaim, premi, dan pendaftaran RS | ✅ |
| 📅 **Kalender Pengingat** | Buat & kelola jadwal kontrol, obat, vaksin | ✅ |
| 🔔 **Notifikasi** | Pemberitahuan otomatis untuk semua aktivitas | ✅ |
| 🤖 **MefaBot (AI)** | Chatbot berbasis Gemini AI untuk bantuan 24/7 | ✅ |
| 💪 **Health Tracking** | Monitor kesehatan harian | ✅ |
| 💬 **Feedback & Saran** | Berikan penilaian dan masukan layanan | ✅ |
| 👤 **Profil Pengguna** | Edit profil, foto, dan tanda tangan digital | ✅ |

### Kalender Pengingat *(Fitur Terbaru)*

- **Kategori pengingat**: Kontrol dokter, Minum obat, Vaksinasi, Lainnya
- **Pengulangan**: Tidak berulang / Harian / Mingguan / Bulanan
- **Notifikasi otomatis**: Pengingat yang jatuh tempo hari ini muncul otomatis di halaman Notifikasi
- **Kalender interaktif**: Navigasi bulan, indikator titik per tanggal, tanggal lalu tidak bisa dipilih
- **Manajemen**: Tandai selesai, edit, atau hapus pengingat

---

## 📁 Struktur Project

```
MefaSafe/
│
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── Api/
│   │           ├── AuthController.php
│   │           ├── ChatBotController.php          # MefaBot (Gemini AI)
│   │           ├── ClaimController.php
│   │           ├── DoctorConsultationController.php
│   │           ├── FeedbackController.php
│   │           ├── HomeDashboardController.php
│   │           ├── HospitalController.php
│   │           ├── HospitalRegistrationController.php
│   │           ├── InsurancePolicyController.php
│   │           ├── NotificationController.php     # Notifikasi terintegrasi
│   │           ├── ReminderController.php         # Kalender Pengingat
│   │           ├── RiwayatController.php
│   │           ├── TransactionController.php
│   │           └── UserController.php
│   └── Models/
│       ├── Claim.php
│       ├── Doctor.php
│       ├── DoctorConsultation.php
│       ├── Feedback.php
│       ├── Hospital.php
│       ├── HospitalRegistration.php
│       ├── InsurancePolicy.php
│       ├── Profile.php
│       ├── Reminder.php                           # Model pengingat
│       ├── Transaction.php
│       └── User.php
│
├── database/
│   ├── migrations/
│   │   ├── ..._alter_users_table_for_mefasafe.php
│   │   ├── ..._create_profiles_table.php
│   │   ├── ..._create_insurance_policies_table.php
│   │   ├── ..._create_claims_table.php
│   │   ├── ..._create_transactions_table.php
│   │   ├── ..._create_hospital_registrations_table.php
│   │   ├── ..._create_doctor_consultations_table.php
│   │   ├── ..._create_feedbacks_table.php
│   │   ├── ..._create_hospitals_table.php
│   │   ├── ..._create_doctors_table.php
│   │   └── ..._create_reminders_table.php         # Tabel pengingat
│   └── seeders/
│       ├── DatabaseSeeder.php
│       ├── DoctorSeeder.php
│       └── HospitalSeeder.php
│
├── resources/
│   └── js/
│       ├── app.jsx
│       └── components/
│           ├── App.jsx                            # Root + routing utama
│           ├── Dashboard.jsx                      # Shell utama + navigasi
│           ├── Login.jsx
│           ├── Register.jsx
│           ├── TermAgreement.jsx
│           ├── Profile.jsx
│           ├── Notifikasi.jsx
│           ├── ChatBot.jsx                        # MefaBot UI
│           ├── KalenderPengingat.jsx              # Kalender Pengingat
│           ├── DaftarRS.jsx
│           ├── PendaftaranRS.jsx
│           ├── Riwayat.jsx
│           └── HealthService.jsx
│
├── routes/
│   └── api.php
│
├── assets/                                        # Gambar & ikon statis
├── public/
├── .env.example
├── composer.json
├── package.json
└── README.md
```

---

## 🗄 Database Schema

### Tabel Utama

| Tabel | Deskripsi | Kolom Penting |
|-------|-----------|---------------|
| `users` | Data pengguna | `name`, `email`, `password`, `role` |
| `profiles` | Profil lengkap | `full_name`, `birth_info`, `address`, `identity_card_path` |
| `insurance_policies` | Polis asuransi | `policy_number`, `insurance_type`, `premium_amount`, `coverage_limit`, `start_date`, `end_date` |
| `claims` | Pengajuan klaim | `claim_amount`, `description`, `document_path`, `status` |
| `transactions` | Transaksi keuangan | `transaction_type`, `amount`, `transaction_date`, `status` |
| `hospital_registrations` | Pendaftaran RS | `hospital_name`, `doctor_name`, `schedule_date`, `queue_number`, `barcode_data` |
| `doctor_consultations` | Konsultasi dokter | `doctor_name`, `specialist_type`, `consultation_type`, `status` |
| `hospitals` | Data rumah sakit | `name`, `address`, `city`, `latitude`, `longitude`, `is_partner` |
| `doctors` | Data dokter | `hospital_id`, `name`, `specialist`, `availability` |
| `feedbacks` | Masukan pengguna | `category`, `content`, `rating` |
| `reminders` | Kalender pengingat | `title`, `reminder_date`, `reminder_time`, `category`, `repeat`, `is_done`, `is_notified` |

### Relasi Utama

```
users ──< insurance_policies ──< claims
users ──< transactions
users ──< hospital_registrations >── hospitals
users ──< doctor_consultations
users ──< feedbacks
users ──< reminders
users ──  profiles
hospitals ──< doctors
```

---

## 🚀 Instalasi

### Prasyarat

- PHP >= 8.2
- Composer
- Node.js >= 18.x & npm
- MySQL >= 8.0
- Git

### 1. Clone Repository

```bash
git clone https://github.com/Raihanhidayah12/Mefasefa.git
cd Mefasefa
```

### 2. Setup Backend (Laravel)

```bash
# Install dependencies PHP
composer install

# Salin file environment
cp .env.example .env

# Generate application key
php artisan key:generate

# Konfigurasi database di .env
# DB_DATABASE=mefasafe
# DB_USERNAME=root
# DB_PASSWORD=

# Jalankan migrasi + seeder
php artisan migrate --seed

# Jalankan server
php artisan serve
# → http://127.0.0.1:8000
```

### 3. Setup Frontend (React + Vite)

```bash
# Install dependencies JS
npm install

# Jalankan dev server
npm run dev
# → http://localhost:5173

# Atau build untuk production
npm run build
```

### 4. Konfigurasi Gemini AI (Opsional)

Untuk mengaktifkan MefaBot dengan Gemini AI:

```env
# Di file .env
GEMINI_API_KEY=your_api_key_here
```

> Tanpa API key, chatbot tetap berfungsi menggunakan fallback responses bawaan.

---

## 📡 API Endpoints

### Base URL
```
http://127.0.0.1:8000/api
```

### Autentikasi (Publik)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `POST` | `/register` | Registrasi pengguna baru |
| `POST` | `/login` | Login dan dapatkan token |

### Endpoints Utama (`/api/v1/`)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/home-dashboard` | Data dashboard utama |
| `GET` | `/my-policies` | Polis milik user |
| `GET/POST` | `/claims` | Daftar & ajukan klaim |
| `GET/POST` | `/transactions` | Riwayat transaksi |
| `GET/POST` | `/hospital-registrations` | Pendaftaran RS |
| `GET/POST` | `/doctor-consultations` | Konsultasi dokter |
| `GET` | `/hospitals` | Daftar rumah sakit |
| `GET` | `/hospitals/{id}/doctors` | Dokter di RS tertentu |
| `GET` | `/riwayat` | Riwayat lengkap user |
| `GET` | `/notifications` | Semua notifikasi |
| `GET` | `/notifications/summary` | Ringkasan notifikasi |
| `GET` | `/reminders` | Semua pengingat user |
| `POST` | `/reminders` | Buat pengingat baru |
| `PUT` | `/reminders/{id}` | Update pengingat |
| `DELETE` | `/reminders/{id}` | Hapus pengingat |
| `GET` | `/reminders/today` | Pengingat hari ini |
| `GET` | `/reminders/upcoming` | Pengingat 7 hari ke depan |
| `POST` | `/chatbot/chat` | Chat dengan MefaBot |
| `GET` | `/chatbot/quick-replies` | Saran pertanyaan chatbot |

---

## 👥 Tim Pengembang

**Kelompok 4 — Kelas T2D**  
Program Studi D3 Teknologi Informasi, Fakultas Vokasi, Universitas Brawijaya  
Tahun Akademik 2025/2026

| NIM | Nama | Kontribusi |
|-----|------|------------|
| 253140707111009 | Anisa Dwi Ariyanti | Activity Diagram, User Persona, User Flow, Wireframe, Diagram Navigasi |
| 253140707111011 | Latisha Syifa Pratiwi | Identifikasi User, Normalisasi Database, Relasi Tabel, User Journey Map |
| 253140707111013 | Nasywa Putri Rachmita | Use Case Diagram, Skenario, Sitemap, Wireframe Low Fidelity |

---

## 🔄 Changelog

### v2.0.0 — UAS (Mei 2026)
- ✅ Full-stack implementation (Laravel 11 + React 19)
- ✅ Autentikasi dengan Laravel Sanctum
- ✅ Dashboard dengan data real-time
- ✅ Manajemen polis, klaim, dan transaksi
- ✅ Konsultasi dokter (chat & video call)
- ✅ Daftar rumah sakit dengan peta Leaflet
- ✅ Pendaftaran RS online dengan barcode
- ✅ Riwayat transaksi lengkap
- ✅ **Kalender Pengingat** dengan notifikasi otomatis *(baru)*
- ✅ Sistem notifikasi terintegrasi (klaim, transaksi, RS, konsultasi, pengingat)
- ✅ MefaBot — chatbot AI berbasis Gemini dengan fallback responses
- ✅ Health Tracking
- ✅ Feedback & rating sistem
- ✅ Manajemen profil dengan foto dan tanda tangan digital

### v1.0.0 — UTS (Mei 2026)
- ✅ Database design & normalisasi
- ✅ Use case & activity diagrams
- ✅ UI/UX wireframes & prototype Figma
- ✅ User persona & journey mapping

---

## 📄 License

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

<div align="center">
  <strong>Made with ❤️ by Kelompok 4 — MefaSafe</strong><br>
  <sub>D3 Teknologi Informasi · Universitas Brawijaya · 2025/2026</sub>
</div>
