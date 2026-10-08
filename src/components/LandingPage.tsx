'use client';

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Store, Sparkles, ArrowRight, Zap, Smartphone, Users, TrendingUp, ShieldCheck, Star, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const { login, loginDemo } = useAppStore();
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState('');
  const [biz, setBiz] = useState('');
  const [type, setType] = useState('');

  const features = [
    { icon: <Sparkles style={{ width: 24, height: 24 }} />, title: 'Konuşarak Uygulama Üret', desc: 'Sadece ne istediğinizi söyleyin, yapay zeka saniyeler içinde çalışan bir uygulama oluştursun.', color: '#f97316' },
    { icon: <Smartphone style={{ width: 24, height: 24 }} />, title: 'Canlı Telefon Önizleme', desc: 'Üretilen uygulamayı gerçek bir telefon ekranında anında test edin ve müşterilerinize gösterin.', color: '#3b82f6' },
    { icon: <Zap style={{ width: 24, height: 24 }} />, title: 'Hazır Modüller', desc: 'Sadakat kartı, randevu sistemi, dijital menü — işletmenize özel çözümler tek tıkla.', color: '#8b5cf6' },
    { icon: <ShieldCheck style={{ width: 24, height: 24 }} />, title: 'Sıfır Teknik Bilgi', desc: 'Kod bilmenize gerek yok. Tıpkı bir arkadaşınızla konuşur gibi uygulamanızı tarif edin.', color: '#10b981' },
    { icon: <Users style={{ width: 24, height: 24 }} />, title: 'Müşteri Takibi', desc: 'Kaç müşteri uygulamanızı kullandı, en popüler ürününüz hangisi — tümü tek panelde.', color: '#ec4899' },
    { icon: <TrendingUp style={{ width: 24, height: 24 }} />, title: 'Dijitalleşin, Büyüyün', desc: 'Rakiplerinizden bir adım öne geçin. Dijital sadakat ve online randevu ile müşteri kaybetmeyin.', color: '#f59e0b' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', overflow: 'auto' }}>
      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#f97316,#fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Store style={{ width: 20, height: 20, color: 'white' }} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>Esnaf <span style={{ color: '#f97316' }}>AI</span></span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn" style={{ background: 'transparent', color: '#94a3b8', border: '1px solid #334155' }} onClick={() => setShowLogin(true)}>Giriş Yap</button>
            <button className="btn btn-primary" onClick={loginDemo}>Demo Dene</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 750, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 16px', borderRadius: 20, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', fontSize: '0.8rem', color: '#fb923c', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Sparkles style={{ width: 14, height: 14 }} /> 2026 AI-Agent Teknolojisi
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
            İşletmeniz İçin
            <br /><span style={{ color: '#f97316' }}>Konuşarak</span> Uygulama Üretin
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--muted)', maxWidth: 550, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Kod yazmayı bilmenize gerek yok. Yapay zekaya ne istediğinizi söyleyin — sadakat kartı, randevu sistemi veya dijital menü anında hazır.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem', boxShadow: '0 10px 25px -5px rgba(249,115,22,0.4)' }} onClick={loginDemo}>
              <Sparkles style={{ width: 18, height: 18 }} /> Demo ile Başla
            </button>
            <button className="btn" style={{ padding: '14px 28px', fontSize: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--foreground)' }} onClick={() => setShowLogin(true)}>
              Ücretsiz Kayıt Ol <ArrowRight style={{ width: 18, height: 18 }} />
            </button>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '1rem', opacity: 0.6 }}>Kredi kartı gerektirmez · 30 saniyede başlayın</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '0 1.5rem 4rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'Aktif Esnaf', value: '1,240+', icon: <Store style={{ width: 18, height: 18 }} /> },
            { label: 'Üretilen Uygulama', value: '3,800+', icon: <Smartphone style={{ width: 18, height: 18 }} /> },
            { label: 'Müşteri Etkileşimi', value: '45K+', icon: <Users style={{ width: 18, height: 18 }} /> },
            { label: 'Memnuniyet', value: '%97', icon: <Star style={{ width: 18, height: 18 }} /> },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div style={{ color: '#f97316', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Neden <span style={{ color: '#f97316' }}>Esnaf AI</span>?</h2>
            <p style={{ color: 'var(--muted)' }}>Dijitalleşmek hiç bu kadar kolay olmamıştı.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = f.color; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${f.color}15`, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '3rem' }}>Nasıl Çalışır?</h2>
          {[
            { step: '01', title: 'İşletmenizi Tanıtın', desc: 'Adınızı, işletme adınızı ve sektörünüzü girin. 30 saniye sürer.', icon: '🏪' },
            { step: '02', title: 'AI\'a Ne İstediğinizi Söyleyin', desc: '"Müşterilerim için sadakat kartı istiyorum" gibi doğal bir cümle yeterli.', icon: '💬' },
            { step: '03', title: 'Uygulamanız Anında Hazır', desc: 'Yapay zeka kodları yazar, sağ taraftaki telefon ekranında uygulamanız belirir.', icon: '📱' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: 16, background: 'var(--background)', border: '1px solid var(--border)', marginBottom: '1rem' }}>
              <div style={{ minWidth: 56, height: 56, borderRadius: 14, background: 'linear-gradient(135deg, #f97316, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{item.icon}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: '0.75rem', color: '#f97316', fontWeight: 700 }}>{item.step}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Dijitalleşmeye Hazır mısınız?</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Binlerce esnaf Esnaf AI ile müşterilerine daha iyi hizmet veriyor.</p>
        <button className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem', boxShadow: '0 10px 25px -5px rgba(249,115,22,0.4)' }} onClick={loginDemo}>
          <Sparkles style={{ width: 18, height: 18 }} /> Hemen Başla
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1.5rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>© 2026 Esnaf AI · Samsun Üniversitesi · Yazılım Mühendisliği Projesi</p>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div onClick={() => setShowLogin(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div onClick={e => e.stopPropagation()} className="animate-slide-up" style={{ width: '100%', maxWidth: 420, padding: '2rem', background: 'var(--surface)', borderRadius: 20, border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>İşletmenizi Tanıtın</h2>
            <form onSubmit={e => { e.preventDefault(); if (name && biz && type) login(name, biz, type); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>Ad Soyad</label>
                <input required className="input" placeholder="Baran Özbey" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>İşletme Adı</label>
                <input required className="input" placeholder="Yılmaz Kardeşler Çay Ocağı" value={biz} onChange={e => setBiz(e.target.value)} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>Sektör</label>
                <select required className="input" value={type} onChange={e => setType(e.target.value)} style={{ appearance: 'none' }}>
                  <option value="" disabled>Seçiniz...</option>
                  <option value="Berber / Kuaför">Berber / Kuaför</option>
                  <option value="Kafe / Çay Ocağı">Kafe / Çay Ocağı</option>
                  <option value="Restoran / Lokanta">Restoran / Lokanta</option>
                  <option value="Bakkal / Market">Bakkal / Market</option>
                  <option value="Oto Yıkama">Oto Yıkama</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ padding: 14, marginTop: 8 }}>
                <Sparkles style={{ width: 16, height: 16 }} /> Başla
              </button>
            </form>
            <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
              <button onClick={() => { setShowLogin(false); loginDemo(); }} style={{ background: 'none', border: 'none', color: '#f97316', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'inherit' }}>
                veya Demo ile Dene →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
