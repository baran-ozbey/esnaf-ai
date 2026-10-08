'use client';

import { Store, Sparkles, Zap, Smartphone, ShieldCheck, Brain, TrendingUp } from 'lucide-react';

export default function HelpPage() {
  return (
    <div style={{ padding: '1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 className="animate-slide-up" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Yardım & Hakkında</h1>

      {/* About */}
      <div className="animate-slide-up" style={{
        textAlign: 'center', padding: '2rem', marginBottom: '1.25rem', borderRadius: 16,
        background: 'linear-gradient(135deg, rgba(249,115,22,0.05), rgba(251,146,60,0.03))',
        border: '1px solid rgba(249,115,22,0.15)'
      }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: 'linear-gradient(135deg,#f97316,#fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
          <Store style={{ width: 32, height: 32, color: 'white' }} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Esnaf <span style={{ color: '#f97316' }}>AI</span></h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Küçük İşletmeler İçin AI Uygulama Üretici</p>
        <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Versiyon 1.0.0 · 2026</p>
      </div>

      {/* What is */}
      <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>📚 Esnaf AI Nedir?</h3>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '0.75rem' }}>
          Esnaf AI, 2026 yılında yükselen &quot;AI Software Engineers&quot; (Kod Yazan Yapay Zeka) trendini alıp,
          Türkiye&apos;deki küçük işletmelere (berber, kafe, lokanta vb.) hiper-yerel bir çözüm olarak sunan
          devrimsel bir platformdur.
        </p>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)' }}>
          Global pazarda Devin, Cursor ve Vercel v0 gibi araçlar yazılımcılara AI ile kod yazdırıyor.
          Esnaf AI ise bu gücü teknik bilgisi olmayan esnafa veriyor: Sadece &quot;Randevu sistemi istiyorum&quot;
          demek yeterli.
        </p>
      </div>

      {/* Features */}
      <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>✨ Özellikler</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
          {[
            { icon: <Sparkles style={{ width: 16, height: 16 }} />, title: 'Text-to-UI', desc: 'Yazıyı çalışan arayüze çevirme' },
            { icon: <Smartphone style={{ width: 16, height: 16 }} />, title: 'Canlı Önizleme', desc: 'Telefon mockup\'ında anında test' },
            { icon: <ShieldCheck style={{ width: 16, height: 16 }} />, title: 'Sıfır Kod', desc: 'Teknik bilgi gerektirmez' },
            { icon: <Brain style={{ width: 16, height: 16 }} />, title: 'AI Asistan', desc: 'Doğal dilde iletişim' },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem', borderRadius: 8, background: 'var(--background)' }}>
              <div style={{ color: '#f97316', flexShrink: 0, marginTop: 2 }}>{f.icon}</div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{f.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>🛠️ Teknoloji Stack</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Lucide Icons', 'Sonner'].map(t => (
            <span key={t} style={{ fontSize: '0.75rem', padding: '6px 12px', borderRadius: 8, background: 'rgba(249,115,22,0.1)', color: '#f97316', fontWeight: 600 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>🎓 Proje Bilgileri</h3>
        {[
          ['Ders', 'Yazılım Mühendisliği Projesi'],
          ['Üniversite', 'Samsun Üniversitesi'],
          ['Trend', 'AI-Agent & AI-Coder (2026+)'],
          ['İlham', 'Devin AI, Cursor, Vercel v0'],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{k}</span>
            <span style={{ fontWeight: 500, fontSize: '0.85rem' }}>{v}</span>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>❓ Sıkça Sorulan Sorular</h3>
        {[
          { q: 'Gerçekten kod yazmadan uygulama mı üretiliyor?', a: 'Evet! Yapay zeka, sizin doğal dildeki isteğinizi analiz eder ve arkada kodu yazarak çalışan bir arayüz üretir.' },
          { q: 'Müşterilerim nasıl kullanacak?', a: 'Üretilen uygulamalar QR kod ile paylaşılabilir. Müşteriler telefonlarından okutarak anında erişir.' },
          { q: 'Demo modu nedir?', a: 'Demo modu, projenin API anahtarı olmadan tam fonksiyonel çalışmasını sağlar. Sunum için idealdir.' },
        ].map((faq, i) => (
          <div key={i} style={{ padding: '1rem', borderRadius: 10, background: 'var(--background)', marginBottom: i < 2 ? '0.5rem' : 0 }}>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{faq.q}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{faq.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
