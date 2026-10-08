'use client';

import { useAppStore } from '@/lib/store';
import { AppWindow, Trash2, ExternalLink, Plus, Wand2 } from 'lucide-react';
import { toast } from 'sonner';

export default function MyAppsPage() {
  const { myApps, deleteApp, setPage } = useAppStore();

  const typeIcons: Record<string, string> = { loyalty: '🎫', appointment: '📅', menu: '🍽️' };
  const typeNames: Record<string, string> = { loyalty: 'Sadakat Kartı', appointment: 'Randevu Sistemi', menu: 'Dijital Menü' };
  const typeColors: Record<string, string> = { loyalty: '#f97316', appointment: '#3b82f6', menu: '#ef4444' };

  return (
    <div style={{ padding: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
      <div className="animate-slide-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>Uygulamalarım</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>AI ile oluşturduğunuz tüm uygulamalar</p>
        </div>
        <button className="btn btn-primary" onClick={() => setPage('builder')}>
          <Plus style={{ width: 14, height: 14 }} /> Yeni Uygulama
        </button>
      </div>

      {myApps.length === 0 ? (
        <div className="animate-slide-up" style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--muted)' }}>
          <AppWindow style={{ width: 48, height: 48, opacity: 0.3, margin: '0 auto 1rem', display: 'block' }} />
          <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Henüz uygulama oluşturmadınız</h2>
          <p style={{ fontSize: '0.9rem', maxWidth: 400, margin: '0 auto 1.5rem' }}>
            AI ile konuşarak saniyeler içinde işletmenize özel uygulama oluşturabilirsiniz.
          </p>
          <button className="btn btn-primary" onClick={() => setPage('builder')}>
            <Wand2 style={{ width: 16, height: 16 }} /> İlk Uygulamanı Yap
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {myApps.map(app => (
            <div key={app.id} className="animate-slide-up" style={{
              padding: '1.5rem', borderRadius: 16, background: 'var(--surface)',
              border: '1px solid var(--border)', transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = typeColors[app.type] || '#f97316'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{typeIcons[app.type]}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>{app.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                      {new Date(app.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
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

              {/* Config info */}
              <div style={{ padding: '0.75rem', borderRadius: 10, background: 'var(--background)', marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                {app.type === 'loyalty' && `${app.config.stampsRequired || 5} damga = 1 ödül`}
                {app.type === 'appointment' && `${(app.config.services as string[])?.length || 0} hizmet`}
                {app.type === 'menu' && `${(app.config.categories as string[])?.length || 0} kategori`}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn" style={{ flex: 1, background: 'var(--background)', border: '1px solid var(--border)', fontSize: '0.8rem' }}
                  onClick={() => toast.info('Önizleme: AI Builder sayfasından düzenleyebilirsiniz.')}>
                  <ExternalLink style={{ width: 14, height: 14 }} /> Önizle
                </button>
                <button className="btn" style={{ background: 'rgba(239,68,68,0.08)', color: '#ef4444', border: 'none', fontSize: '0.8rem' }}
                  onClick={() => { deleteApp(app.id); toast.success('Uygulama silindi.'); }}>
                  <Trash2 style={{ width: 14, height: 14 }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
