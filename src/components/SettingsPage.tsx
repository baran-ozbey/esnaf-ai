'use client';

import { useAppStore } from '@/lib/store';
import { Store, Globe, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { esnaf } = useAppStore();
  if (!esnaf) return null;

  return (
    <div style={{ padding: '1.5rem', maxWidth: 650, margin: '0 auto' }}>
      <h1 className="animate-slide-up" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Ayarlar</h1>

      <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Globe style={{ width: 16, height: 16, color: '#f97316' }} /> İşletme Bilgileri
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>İşletme Sahibi</label>
            <input className="input" defaultValue={esnaf.ownerName} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>İşletme Adı</label>
            <input className="input" defaultValue={esnaf.businessName} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>Sektör</label>
            <input className="input" defaultValue={esnaf.businessType} />
          </div>
        </div>
      </div>

      <div className="animate-slide-up" style={{ padding: '1.5rem', borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Store style={{ width: 16, height: 16, color: '#f97316' }} /> Bildirimler
        </h3>
        {[
          { label: 'Yeni müşteri bildirimi', desc: 'Uygulamanıza yeni müşteri katıldığında' },
          { label: 'Haftalık rapor', desc: 'Her Pazartesi performans özeti' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderRadius: 8, background: 'var(--background)', marginBottom: i === 0 ? '0.5rem' : 0 }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.desc}</div>
            </div>
            <div style={{
              width: 44, height: 24, borderRadius: 12, background: '#f97316', cursor: 'pointer', position: 'relative'
            }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'white', position: 'absolute', top: 3, left: 23, transition: 'left 0.2s' }} />
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary animate-slide-up" style={{ width: '100%' }} onClick={() => toast.success('Ayarlar kaydedildi! ✅')}>
        <Save style={{ width: 16, height: 16 }} /> Kaydet
      </button>
    </div>
  );
}
