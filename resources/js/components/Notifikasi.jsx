
import { useState, useEffect } from "react";
import { BellRing, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import axios from "axios";

import surat from "../../../assets/surat.png";
import bel from "../../../assets/bel.png";
import toa from "../../../assets/toa.png";
import kertas from "../../../assets/kertas.png";

function Notification({ user }) {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState({
    today_notifications: 0,
    unread_count: 0,
    verified_count: 0,
    needs_attention_count: 0,
    weekly_activity: {
      claims_submitted: 0,
      successful_payments: 0,
      active_reminders: 0,
    },
  });
  const [loading, setLoading] = useState(true);

  // Icon mapping
  const iconMap = {
    surat: surat,
    bel: bel,
    toa: toa,
    kertas: kertas,
  };

  useEffect(() => {
    fetchNotifications();
    fetchSummary();
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("mefasafe_token") || localStorage.getItem("token");
      const response = await axios.get("/api/v1/notifications", {
        params: { user_id: user?.id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSummary = async () => {
    try {
      const token = localStorage.getItem("mefasafe_token") || localStorage.getItem("token");
      const response = await axios.get("/api/v1/notifications/summary", {
        params: { user_id: user?.id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setSummary(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  const summaryCards = [
    { label: "Notif belum dibaca", value: summary.unread_count.toString(), icon: BellRing, color: "text-cyan-600" },
    { label: "Sudah diverifikasi", value: summary.verified_count.toString(), icon: ShieldCheck, color: "text-sky-600" },
    { label: "Butuh perhatian", value: summary.needs_attention_count.toString(), icon: Clock3, color: "text-blue-600" },
  ];


  return (
    <div className="bg-gradient-to-br relative overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-140px] right-[-80px] h-72 w-72 rounded-full" />
        <div className="absolute bottom-[-120px] left-[-60px] h-80 w-80 rounded-full " />
      </div>

      <div className="relative max-w-6xl mx-auto">

        <div>
          <section className="rounded-[28px] border border-white/70 bg-white/95 backdrop-blur-xl p-6 md:p-7 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.18)]">
            <div className="flex flex-wrap gap-4 items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-600 uppercase Service-[0.25em]">Notifikasi</p>
                <h1 className="mt-2 text-3xl md:text-4xl font-black text-slate-900 Service-tight">
                  Ringkasan aktivitas terbaru
                </h1>
                <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-500">
                  Pantau pembaruan penting dengan tampilan dashboard yang lebih rapi, ringan, dan mudah dibaca.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {summaryCards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase Service-[0.2em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-2xl font-black text-slate-900">{item.value}</p>
                    </div>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {['Semua', 'Penting', 'Promo', 'Selesai'].map((tab, idx) => (
                <button
                  key={tab}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    idx === 0
                      ? 'bg-slate-950 text-white shadow-lg'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-200 hover:text-cyan-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {loading ? (
                <div className="rounded-[24px] border border-dashed border-slate-200 bg-slate-50/80 px-6 py-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-slate-400">
                    <BellRing className="w-7 h-7 animate-pulse" />
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-slate-900">Memuat notifikasi...</h2>
                </div>
              ) : data.length === 0 ? (
                <div className="rounded-[24px] border border-dashed border-slate-200 bg-slate-50/80 px-6 py-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-slate-400">
                    <BellRing className="w-7 h-7" />
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-slate-900">Belum ada notifikasi</h2>
                  <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                    Saat ini belum ada pemberitahuan baru dari database. Notifikasi akan muncul di sini setelah data tersedia.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {data.map((item, index) => (
                    <article
                      key={item.id}
                      className="rounded-[22px] border border-slate-100 bg-white p-4 md:p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-30px_rgba(79,70,229,0.28)]"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex gap-4 items-start">
                          <div className={`rounded-2xl bg-gradient-to-br ${item.tone} p-3 shrink-0`}>
                            <img src={iconMap[item.icon]} alt="" className="w-7 h-7 object-contain" />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h2 className="text-base md:text-lg font-bold text-slate-900">{item.title}</h2>
                              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase Service-[0.2em] text-slate-600">
                                {item.status}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-slate-600 leading-6">{item.desc}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500 md:min-w-[110px] md:justify-end">
                          <Clock3 className="w-4 h-4" />
                          {item.time}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>

          
        </div>
      </div>
    </div>
  );
}

export default Notification;
