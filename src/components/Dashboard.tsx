'use client';

import { useAppStore } from '@/lib/store';
import { AppWindow, Users, Eye, TrendingUp, Wand2, ArrowUpRight, Plus, Sparkles, Smartphone, Store } from 'lucide-react';

export default function Dashboard() {
  const { esnaf, stats, myApps, setPage } = useAppStore();
  if (!esnaf) return null;

  const quickStats = [
    { label: 'Toplam Uygulama', value: stats.totalApps.toString(), icon: <AppWindow style={{ width: 20, height: 20 }} />, color: '#f97316' },
    { label: 'Toplam Müşteri', value: stats.totalCustomers.toString(), icon: <Users style={{ width: 20, height: 20 }} />, color: '#3b82f6' },
    { label: 'Toplam Görüntülenme', value: stats.totalViews.toLocaleString(), icon: <Eye style={{ width: 20, height: 20 }} />, color: '#8b5cf6' },
    { label: 'Aylık Büyüme', value: `%${stats.monthlyGrowth}`, icon: <TrendingUp style={{ width: 20, height: 20 }} />, color: '#10b981', isGrowth: true },
  ];

  const typeIcons: Record<string, string> = { loyalty: '🎫', appointment: '📅', menu: '🍽️' };
  const typeNames: Record<string, string> = { loyalty: 'Sadakat Kartı', appointment: 'Randevu Sistemi', menu: 'Dijital Menü' };

  return (
    <div style={{ padding: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      {/* Welcome */}
      <div className="animate-slide-up" style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
          Hoş geldiniz, {esnaf.ownerName}! 👋
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          {esnaf.businessName} için kontrol paneliniz.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {quickStats.map((s, i) => (
          <div key={i} className="animate-slide-up" style={{
            padding: '1.25rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)',
            animationDelay: `${i * 0.05}s`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${s.color}15`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
              {(s as any).isGrowth && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '0.75rem', fontWeight: 600, color: '#10b981' }}>
                  <ArrowUpRight style={{ width: 14, height: 14 }} /> %{stats.monthlyGrowth}
                </span>
              )}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{s.value}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions + My Apps */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        {/* Quick Actions */}
        <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Sparkles style={{ width: 18, height: 18, color: '#f97316' }} /> Hızlı İşlemler
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Yeni Uygulama Oluştur', desc: 'AI ile konuşarak hemen başla', icon: <Wand2 style={{ width: 18, height: 18 }} />, color: '#f97316' },
              { label: 'Uygulamalarımı Gör', desc: `${stats.totalApps} aktif uygulama`, icon: <AppWindow style={{ width: 18, height: 18 }} />, color: '#3b82f6' },
            ].map((a, i) => (
              <button key={i} onClick={() => setPage(i === 0 ? 'builder' : 'apps')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: 12,
                  background: 'var(--background)', border: '1px solid var(--border)',
                  cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', transition: 'all 0.15s', width: '100%'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = a.color; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${a.color}15`, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{a.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{a.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{a.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Apps */}
        <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Smartphone style={{ width: 18, height: 18, color: '#3b82f6' }} /> Son Uygulamalar
            </h2>
            {myApps.length > 0 && (
              <button className="btn" style={{ fontSize: '0.75rem', padding: '4px 12px', background: 'var(--background)', border: '1px solid var(--border)' }} onClick={() => setPage('apps')}>
                Tümünü Gör
              </button>
            )}
          </div>

          {myApps.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--muted)' }}>
              <AppWindow style={{ width: 32, height: 32, opacity: 0.3, margin: '0 auto 0.5rem', display: 'block' }} />
              <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Henüz uygulama oluşturmadınız.</p>
              <button className="btn btn-primary" onClick={() => setPage('builder')}>
                <Plus style={{ width: 14, height: 14 }} /> İlk Uygulamanı Yap
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {myApps.slice(-3).reverse().map(app => (
                <div key={app.id} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem',
                  borderRadius: 10, background: 'var(--background)', border: '1px solid var(--border)'
                }}>
                  <span style={{ fontSize: '1.25rem' }}>{typeIcons[app.type]}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{app.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>
                      {new Date(app.createdAt).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.65rem', padding: '3px 8px', borderRadius: 6, fontWeight: 600,
                    background: app.status === 'active' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                    color: app.status === 'active' ? '#10b981' : '#f59e0b'
                  }}>
                    {app.status === 'active' ? 'Aktif' : 'Durduruldu'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
