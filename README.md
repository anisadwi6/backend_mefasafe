# MefaSafe - Digital Insurance Platform

[![Laravel](https://img.shields.io/badge/Laravel-10.x-red.svg)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📋 Deskripsi Project

MefaSafe adalah prototype solusi digital dalam sektor InsurTech yang dikembangkan untuk meningkatkan transparansi dan kemudahan dalam pembelian produk asuransi online. Platform ini menyediakan fitur-fitur modern untuk manajemen polis, klaim digital, konsultasi dokter online, dan layanan kesehatan terintegrasi.

### 🎯 Tujuan Utama

- ✅ Meningkatkan transparansi pembelian produk asuransi online
- ✅ Menghadirkan pencatatan klaim digital yang akurat
- ✅ Memberikan informasi premi dan riwayat transaksi secara real-time
- ✅ Menyediakan fitur konsultasi dokter melalui video call
- ✅ Membangun kepercayaan konsumen melalui keamanan data dan akuntansi transparan

---

## 📚 Table of Contents

- [Arsitektur System](#-arsitektur-system)
- [Tech Stack](#-tech-stack)
- [Fitur Utama](#-fitur-utama)
- [Struktur Project](#-struktur-project)
- [Database Design](#-database-design)
- [Installation](#-installation)
- [API Documentation](#-api-documentation)
- [UI/UX Design](#-uiux-design)
- [Testing](#-testing)
- [Tim Pengembang](#-tim-pengembang)
- [License](#-license)

---

## 🏗 Arsitektur System

Project ini menggunakan arsitektur **MVC (Model-View-Controller)** dengan pemisahan yang jelas antara backend dan frontend:

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│                 │         │                  │         │                 │
│  React + Vite   │ ◄─────► │  Laravel API     │ ◄─────► │    Database     │
│   (Frontend)    │  REST   │   (Backend)      │  MySQL  │     (MySQL)     │
│                 │         │                  │         │                 │
└─────────────────┘         └──────────────────┘         └─────────────────┘
```

### Komponen Utama

1. **Frontend (React + Vite)**
   - User Interface untuk Pengguna & Admin
   - State Management
   - API Integration
   - Responsive Design

2. **Backend (Laravel)**
   - RESTful API
   - Authentication & Authorization
   - Business Logic
   - Database Management

3. **Database (MySQL)**
   - Data Storage
   - Relational Schema
   - Transaction Management

---

## 🛠 Tech Stack

### Backend
- **Framework**: Laravel 10.x
- **Language**: PHP 8.2+
- **Database**: MySQL 8.0+
- **Authentication**: Laravel Sanctum
- **API**: RESTful API

### Frontend
- **Framework**: React 18.x
- **Build Tool**: Vite 5.x
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux/Context API
- **Routing**: React Router v6

### Development Tools
- **Version Control**: Git
- **Package Manager**: Composer (Backend), npm/yarn (Frontend)
- **API Testing**: Postman
- **Code Editor**: VS Code
- **Design Tool**: Figma

---

## ⚡ Fitur Utama

### Untuk Pengguna (User)

| Fitur | Deskripsi | Status |
|-------|-----------|--------|
| 🔐 **Registrasi & Login** | Pendaftaran akun baru dan autentikasi pengguna | ✅ |
| 📜 **Manajemen Polis** | Pembelian dan pengelolaan polis asuransi | ✅ |
| 💰 **Klaim Asuransi** | Pengajuan dan tracking klaim secara online | ✅ |
| 👨‍⚕️ **Konsultasi Dokter** | Video call dan chat dengan dokter spesialis | ✅ |
| 🏥 **Pendaftaran RS** | Pendaftaran layanan rumah sakit online | ✅ |
| 📊 **Riwayat Transaksi** | Melihat histori pembayaran premi dan klaim | ✅ |
| 📅 **Kalender Pengingat** | Notifikasi jatuh tempo pembayaran premi | ✅ |
| 🤖 **Chatbot 24/7** | Tanya jawab seputar polis, klaim, dan premi | ✅ |
| 📍 **Daftar RS Mitra** | Informasi rumah sakit mitra dan lokasi | ✅ |
| 💬 **Feedback & Saran** | Memberikan masukan terhadap layanan | ✅ |

### Untuk Admin

| Fitur | Deskripsi | Status |
|-------|-----------|--------|
| ✔️ **Verifikasi Klaim** | Validasi dan verifikasi pengajuan klaim | ✅ |
| 💸 **Pencairan Dana** | Proses pencairan dana klaim yang disetujui | ✅ |
| 📈 **Dashboard Admin** | Monitoring aktivitas platform | ✅ |

---

## 📁 Struktur Project

```
mefasafe/
│
├── backend/                      # Laravel Backend
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── PolisController.php
│   │   │   │   ├── KlaimController.php
│   │   │   │   ├── KonsultasiController.php
│   │   │   │   ├── PembayaranController.php
│   │   │   │   └── RumahSakitController.php
│   │   │   └── Middleware/
│   │   ├── Models/
│   │   │   ├── User.php
│   │   │   ├── Polis.php
│   │   │   ├── Klaim.php
│   │   │   ├── Konsultasi.php
│   │   │   ├── Pembayaran.php
│   │   │   └── Dokter.php
│   │   └── Services/
│   ├── config/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   ├── tests/
│   ├── .env.example
│   ├── composer.json
│   └── artisan
│
├── frontend/                     # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Dashboard/
│   │   │   │   └── Home.jsx
│   │   │   ├── Polis/
│   │   │   │   ├── PolisList.jsx
│   │   │   │   └── PolisDetail.jsx
│   │   │   ├── Klaim/
│   │   │   │   ├── KlaimForm.jsx
│   │   │   │   └── KlaimStatus.jsx
│   │   │   ├── Konsultasi/
│   │   │   │   ├── DokterList.jsx
│   │   │   │   ├── ChatRoom.jsx
│   │   │   │   └── VideoCall.jsx
│   │   │   ├── RumahSakit/
│   │   │   │   └── RSDaftar.jsx
│   │   │   └── Common/
│   │   │       ├── Navbar.jsx
│   │   │       ├── Footer.jsx
│   │   │       └── Loader.jsx
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── TransactionPage.jsx
│   │   │   └── SettingsPage.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── docs/                         # Dokumentasi
│   ├── API.md
│   ├── DATABASE.md
│   ├── DEPLOYMENT.md
│   └── UI_UX.md
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🗄 Database Design

### Entity Relationship Diagram

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│    USER     │       │    POLIS    │       │  PEMBAYARAN │
├─────────────┤       ├─────────────┤       ├─────────────┤
│ User_id (PK)│───┐   │ Polis_id(PK)│───┐   │Pembayaran_id│
│ Nama        │   │   │ User_id (FK)│   │   │ Polis_id(FK)│
│ Email       │   └──>│ Jenis_polis │   └──>│ Tanggal     │
└─────────────┘       │ Nomor_polis │       │ Jumlah      │
                      └─────────────┘       └─────────────┘
                              │
                              │
                              ▼
                      ┌─────────────┐
                      │    KLAIM    │
                      ├─────────────┤
                      │ Klaim_id(PK)│
                      │ Polis_id(FK)│
                      │ Deskripsi   │
                      │ Status      │
                      └─────────────┘

┌─────────────┐       ┌─────────────┐
│ KONSULTASI  │       │   DOKTER    │
├─────────────┤       ├─────────────┤
│Konsultasi_id│───┐   │Dokter_id(PK)│
│ User_id (FK)│   └──>│ Nama_Dokter │
│Dokter_id(FK)│       │Spesialisasi │
│ Jenis       │       └─────────────┘
└─────────────┘
```

### Normalisasi Database

Database telah melalui proses normalisasi hingga **3NF (Third Normal Form)**:

#### 1NF (First Normal Form)
- Setiap kolom hanya berisi satu nilai (atomic values)
- Tidak ada repeating groups

#### 2NF (Second Normal Form)
- Memenuhi 1NF
- Setiap atribut non-key bergantung penuh pada primary key
- Data dipisahkan ke dalam tabel sesuai jenisnya

#### 3NF (Third Normal Form)
- Memenuhi 2NF
- Tidak ada transitive dependency
- Semua atribut bergantung langsung pada primary key

### Tabel Utama

| Tabel | Deskripsi | Primary Key |
|-------|-----------|-------------|
| `users` | Data pengguna dan admin | `user_id` |
| `polis` | Data polis asuransi | `polis_id` |
| `klaim` | Data pengajuan klaim | `klaim_id` |
| `pembayaran` | Data pembayaran premi | `pembayaran_id` |
| `konsultasi` | Data konsultasi dokter | `konsultasi_id` |
| `dokter` | Data dokter spesialis | `dokter_id` |

> 📖 **Detail lengkap**: Lihat [DATABASE.md](docs/DATABASE.md) untuk schema lengkap dan queries.

---

## 🚀 Installation

### Prerequisites

Pastikan Anda telah menginstall:
- PHP >= 8.2
- Composer
- Node.js >= 18.x
- npm atau yarn
- MySQL >= 8.0
- Git

### Backend Setup (Laravel)

```bash
# Clone repository
git clone https://github.com/your-org/mefasafe.git
cd mefasafe/backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database di .env
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=mefasafe
# DB_USERNAME=root
# DB_PASSWORD=

# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed

# Generate Sanctum secret key
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Start development server
php artisan serve
# Backend akan berjalan di http://localhost:8000
```

### Frontend Setup (React + Vite)

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
# atau
yarn install

# Copy environment file
cp .env.example .env

# Configure API endpoint di .env
# VITE_API_URL=http://localhost:8000/api

# Start development server
npm run dev
# atau
yarn dev
# Frontend akan berjalan di http://localhost:5173
```

### Environment Variables

#### Backend (.env)
```env
APP_NAME=MefaSafe
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mefasafe
DB_USERNAME=root
DB_PASSWORD=

SANCTUM_STATEFUL_DOMAINS=localhost:5173
SESSION_DRIVER=cookie
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=MefaSafe
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:8000/api
```

### Authentication

#### Register
```http
POST /api/register
Content-Type: application/json

{
  "nama": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "password_confirmation": "password123"
}
```

#### Login
```http
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Endpoints Utama

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/api/register` | Registrasi pengguna baru | ❌ |
| POST | `/api/login` | Login pengguna | ❌ |
| POST | `/api/logout` | Logout pengguna | ✅ |
| GET | `/api/user` | Get user profile | ✅ |
| GET | `/api/polis` | List semua polis | ✅ |
| POST | `/api/polis` | Beli polis baru | ✅ |
| GET | `/api/polis/{id}` | Detail polis | ✅ |
| POST | `/api/klaim` | Ajukan klaim | ✅ |
| GET | `/api/klaim/{id}` | Detail klaim | ✅ |
| PUT | `/api/klaim/{id}` | Update status klaim (Admin) | ✅ |
| GET | `/api/dokter` | List dokter spesialis | ✅ |
| POST | `/api/konsultasi` | Buat sesi konsultasi | ✅ |
| GET | `/api/rumah-sakit` | List rumah sakit mitra | ✅ |
| GET | `/api/pembayaran` | Riwayat pembayaran | ✅ |

> 📖 **Detail lengkap**: Lihat [API.md](docs/API.md) untuk dokumentasi API lengkap dengan request/response examples.

---

## 🎨 UI/UX Design

### Design System

#### Color Palette
```css
/* Primary Colors */
--primary: #007AFF;
--primary-dark: #0051D5;
--primary-light: #4DA3FF;

/* Secondary Colors */
--secondary: #34C759;
--secondary-dark: #248A3D;
--secondary-light: #5DD97C;

/* Neutral Colors */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;

/* Status Colors */
--success: #34C759;
--warning: #FFCC00;
--error: #FF3B30;
--info: #007AFF;
```

#### Typography
```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### User Persona

**Nama**: Adrian  
**Usia**: 32 tahun  
**Lokasi**: Yogyakarta, Malang, Jawa Timur  
**Penghasilan**: Rp 3.500.000,-

**Goals & Motivations**:
- Memerlukan konsultasi dengan dokter ahli
- Ingin memiliki polis hidup yang sehat
- Ingin berkonsultasi dengan dokter yang tepat

**Challenges**:
- Sulit mempercayai gaya hidup sehat
- Sulit untuk tidak makan makanan yang berimbang
- Membutuhkan motivasi dari orang terdekat

### Wireframes & Prototype

- **Low Fidelity Wireframes**: Tersedia di laporan (halaman 28-33)
- **High Fidelity Wireframes**: Tersedia di laporan (halaman 34)
- **Figma Prototype**: [Link ke Figma](https://www.figma.com/design/WtM2SMwBQdtLONWMKctiH3/MefaSafe?node-id=0-1&t=MmXlaoNYZnoYXmj2-1)

> 📖 **Detail lengkap**: Lihat [UI_UX.md](docs/UI_UX.md) untuk user journey, user flow, dan design guidelines.

---

## 🧪 Testing

### Backend Testing

```bash
# Run all tests
php artisan test

# Run specific test file
php artisan test tests/Feature/AuthTest.php

# Run with coverage
php artisan test --coverage
```

### Frontend Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

---

## 👥 Tim Pengembang

**Kelompok 4 - Kelas T2D**

| NIM | Nama | Job Description |
|-----|------|-----------------|
| 253140707111009 | Anisa Dwi Ariyanti | Activity Diagram, User Persona, User Flow, Wireframe Low & High Fidelity, Diagram Navigasi System |
| 253140707111011 | Latisha Syifa Pratiwi | Identifikasi User, Tahapan Relasi Normalisasi, Relasi Tabel, User Journey Map, Wireframe Low & High Fidelity |
| 253140707111013 | Nasywa Putri Rachmita | Use Case/Daftar Kebutuhan, Use Case Diagram, Skenario, User Journey Map, Sitemap, Wireframe Low Fidelity |

**Program Studi**: D3 Teknologi Informasi  
**Fakultas**: Vokasi  
**Universitas**: Brawijaya Malang  
**Tahun**: 2025/2026

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

Untuk pertanyaan atau bantuan, silakan hubungi:

- **Email**: support@mefasafe.com
- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/your-org/mefasafe/issues)

---

## 🔄 Changelog

### Version 1.0.0 (UTS - May 2026)
- ✅ Initial project setup
- ✅ Database design & normalization
- ✅ Use case & activity diagrams
- ✅ UI/UX wireframes & prototype
- ✅ User persona & journey mapping
- ✅ System navigation diagram

### Upcoming (UAS)
- ⏳ Class diagram implementation
- ⏳ Backend API development
- ⏳ Frontend implementation
- ⏳ Integration testing
- ⏳ Deployment

---

**Made with ❤️ by Kelompok 4**
#   M e f a s e f a  
 