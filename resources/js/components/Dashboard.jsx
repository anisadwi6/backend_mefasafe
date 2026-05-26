import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Mail,
  Phone,
  Eye,
  EyeOff,
  X,
  Calendar,
  MessageSquare,
  FileText,
  Activity,
  Clock,
  Hospital,
  Stethoscope,
  Bell,
  Settings,
  User,
  Home as HomeIcon,
} from "lucide-react";
import logo from "../../../assets/logo.png";
import family from "../../../assets/family.png";

export default function Home() {
  const [showSaldo, setShowSaldo] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <Hospital className="w-8 h-8" />,
      label: "Daftar Rumah Sakit",
      onClick: () => navigate("/daftarRS"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      label: "Konsultasi Dokter",
      onClick: () => navigate("/konsul"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      label: "Kalender Pengingat",
      onClick: () => alert("Kalender Pengingat"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      label: "Feedback & Suggestions",
      onClick: () => alert("Feedback"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Riwayat Transaksi",
      onClick: () => alert("Riwayat"),
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      label: "Health Service",
      onClick: () => alert("Health Service"),
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      label: "Pendaftaran Pelayanan",
      onClick: () => alert("Pendaftaran"),
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <User className="w-8 h-8" />,
      label: "About Us",
      onClick: () => alert("About Us"),
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  const sidebarMenu = [
    { icon: <HomeIcon className="w-5 h-5" />, label: "Home", onClick: () => navigate("/home") },
    { icon: <Bell className="w-5 h-5" />, label: "Notifikasi", onClick: () => navigate("/notifikasi") },
    { icon: <MessageSquare className="w-5 h-5" />, label: "ChatBot", onClick: () => navigate("/rs") },
    { icon: <Settings className="w-5 h-5" />, label: "Setting", onClick: () => navigate("/settings") },
    { icon: <User className="w-5 h-5" />, label: "Profile", onClick: () => navigate("/Profil") },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowSidebar(true)}
              className="p-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <img src={logo} alt="MefaSafe" className="h-10 md:h-12 object-contain" />
            <img src={family} alt="Family" className="h-10 md:h-12 object-contain" />
          </div>

          {/* Glassmorphism Card */}
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Selamat Pagi,</p>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mezaluna Diazzuri
                </h1>
              </div>
              <span className="px-4 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                ACTIVE
              </span>
            </div>

            <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/40">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowSaldo(!showSaldo)}
                  className="p-2 rounded-xl bg-white/40 hover:bg-white/60 transition-all duration-300"
                >
                  {showSaldo ? (
                    <Eye className="w-5 h-5 text-gray-700" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-700" />
                  )}
                </button>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Saldo Anda</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-800">
                    {showSaldo ? "Rp 105.000.000" : "Rp *********"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Grid */}
      <main className="relative z-10 px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Layanan Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="group relative bg-white/30 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 text-center leading-tight">
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowSidebar(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white/30 backdrop-blur-2xl border-r border-white/30 shadow-2xl z-50 transition-transform duration-500 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <img src={logo} alt="MefaSafe" className="h-10 object-contain" />
            <button
              onClick={() => setShowSidebar(false)}
              className="p-2 rounded-xl bg-white/30 hover:bg-white/50 transition-all duration-300"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <nav className="space-y-2">
            {sidebarMenu.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setShowSidebar(false);
                }}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-white/20 hover:bg-white/40 transition-all duration-300 text-gray-700 font-medium group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Footer */}
      <footer className="relative z-10 mt-16 bg-white/20 backdrop-blur-xl border-t border-white/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Layanan</h3>
              <ul className="space-y-2">
                {menuItems.slice(0, 4).map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.onClick}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Bantuan & Panduan</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-purple-600 cursor-pointer transition-colors duration-300">Pusat Bantuan</li>
                <li className="hover:text-purple-600 cursor-pointer transition-colors duration-300">Syarat & Ketentuan</li>
                <li className="hover:text-purple-600 cursor-pointer transition-colors duration-300">Tentang Kami</li>
                <li className="hover:text-purple-600 cursor-pointer transition-colors duration-300">Promo Hari ini</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Hubungi Kami</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">bantuan@mefasafe.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">021-1234-5678</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/30 text-center">
            <p className="text-sm text-gray-600">
              &copy; 2026 MefaSafe Insurance. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}