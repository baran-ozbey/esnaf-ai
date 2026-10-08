'use client';

import { useAppStore } from '@/lib/store';
import { Store, Coffee, Gift, Plus, ChefHat, CheckCircle2, Scissors } from 'lucide-react';
import { useState } from 'react';

export default function PreviewPhone() {
  const { currentPreview, esnaf } = useAppStore();

  return (
    <div className="phone-mockup">
      <div className="phone-notch" />

      {currentPreview.status === 'generating' && (
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.85)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          zIndex: 50, backdropFilter: 'blur(4px)', color: 'white'
        }}>
          <div className="scanning-line" />
          <div style={{ width: 50, height: 50, border: '3px solid rgba(255,255,255,0.2)', borderTopColor: '#f97316', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem' }} />
          <h4 style={{ fontWeight: 600, fontSize: '0.9rem' }}>Uygulama Yazılıyor...</h4>
          <p style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: 4 }}>AI kodları derliyor</p>
        </div>
      )}

      <div style={{ height: '100%', width: '100%', overflowY: 'auto', background: '#f8fafc' }}>
        {currentPreview.type === 'none' && (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', color: '#64748b' }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Store style={{ width: 28, height: 28, opacity: 0.4 }} />
            </div>
            <p style={{ fontSize: '0.85rem' }}>Sol taraftaki sohbetten ne istediğinizi yazın, uygulamanız burada belirecek.</p>
          </div>
        )}
        {currentPreview.type === 'loyalty' && <LoyaltyApp />}
        {currentPreview.type === 'appointment' && <AppointmentApp />}
        {currentPreview.type === 'menu' && <MenuApp />}
      </div>
    </div>
  );
}

function LoyaltyApp() {
  const { currentPreview, esnaf, updatePreviewConfig } = useAppStore();
  const c = currentPreview.config;
  const stamps = c.stampsRequired || 5;
  const collected = c.stampsCollected || 0;
  const color = c.primaryColor || '#f97316';

  const addStamp = () => updatePreviewConfig({ stampsCollected: collected >= stamps ? 0 : collected + 1 });

  return (
    <div className="animate-slide-up" style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#0f172a' }}>
      <div style={{ background: color, padding: '3rem 1.5rem 1.5rem', color: 'white', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{esnaf?.businessName}</h2>
        <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Sadakat Kartı</p>
      </div>
      <div style={{ padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>
          {collected >= stamps ? '🎉 Tebrikler! Ödülünüzü kazandınız!' : `${stamps - collected} alışveriş sonra ödül senin!`}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(stamps, 5)}, 1fr)`, gap: '0.75rem', width: '100%', maxWidth: 250 }}>
          {Array.from({ length: stamps }).map((_, i) => (
            <div key={i} style={{
              aspectRatio: '1', borderRadius: '50%', border: `2px dashed ${collected > i ? 'transparent' : '#cbd5e1'}`,
              background: collected > i ? color : 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: collected > i ? 'white' : '#cbd5e1', transition: 'all 0.3s'
            }}>
              {i === stamps - 1 ? <Gift style={{ width: 20, height: 20 }} /> : <Coffee style={{ width: 20, height: 20 }} />}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f1f5f9', borderRadius: 16, width: '100%', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: 4 }}>Ödülünüz</p>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, color }}>{c.rewardText || '1 Ücretsiz Ürün'}</p>
        </div>
        <button onClick={addStamp} style={{
          marginTop: 'auto', width: '100%', padding: 14, borderRadius: 16,
          background: color, color: 'white', fontWeight: 600, fontSize: '0.85rem',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
        }}>
          <Plus style={{ width: 16, height: 16 }} /> (Demo) Damga Ekle
        </button>
      </div>
    </div>
  );
}

function AppointmentApp() {
  const { currentPreview, esnaf } = useAppStore();
  const c = currentPreview.config;
  const color = c.primaryColor || '#3b82f6';
  const [selService, setSelService] = useState('');
  const [selTime, setSelTime] = useState('');
  const [booked, setBooked] = useState(false);
  const times = ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30'];

  if (booked) return (
    <div className="animate-slide-up" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <CheckCircle2 style={{ width: 56, height: 56, color, marginBottom: '1rem' }} />
      <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>Randevunuz Onaylandı!</h2>
      <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '2rem' }}>{selTime} · {selService}</p>
      <button onClick={() => setBooked(false)} style={{ padding: '10px 24px', borderRadius: 12, background: '#f1f5f9', border: 'none', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>Yeni Randevu</button>
    </div>
  );

  return (
    <div className="animate-slide-up" style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#0f172a' }}>
      <div style={{ background: color, padding: '3rem 1.5rem 1.5rem', color: 'white' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{esnaf?.businessName}</h2>
        <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Online Randevu</p>
      </div>
      <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
        <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>Hizmet Seçin</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {(c.services || []).map((s: string) => (
            <div key={s} onClick={() => setSelService(s)} style={{
              padding: '0.75rem 1rem', borderRadius: 12, border: `2px solid ${selService === s ? color : '#e2e8f0'}`,
              background: selService === s ? `${color}10` : 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s'
            }}>
              <Scissors style={{ width: 16, height: 16, color: selService === s ? color : '#64748b' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: selService === s ? 600 : 400 }}>{s}</span>
            </div>
          ))}
        </div>
        {selService && (
          <div className="animate-slide-up">
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>Saat Seçin</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
              {times.map(t => (
                <div key={t} onClick={() => setSelTime(t)} style={{
                  padding: '0.6rem 0', textAlign: 'center', borderRadius: 8, cursor: 'pointer',
                  border: `1px solid ${selTime === t ? color : '#e2e8f0'}`,
                  background: selTime === t ? color : 'white', color: selTime === t ? 'white' : '#0f172a',
                  fontSize: '0.85rem', fontWeight: selTime === t ? 600 : 400, transition: 'all 0.2s'
                }}>{t}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '1rem 1.5rem', background: 'white', borderTop: '1px solid #e2e8f0' }}>
        <button disabled={!selService || !selTime} onClick={() => setBooked(true)} style={{
          width: '100%', padding: 12, borderRadius: 12, border: 'none',
          background: selService && selTime ? color : '#e2e8f0',
          color: selService && selTime ? 'white' : '#94a3b8',
          fontWeight: 600, fontSize: '0.85rem', cursor: selService && selTime ? 'pointer' : 'default'
        }}>Randevuyu Onayla</button>
      </div>
    </div>
  );
}

function MenuApp() {
  const { currentPreview, esnaf } = useAppStore();
  const c = currentPreview.config;
  const color = c.primaryColor || '#ef4444';
  const [activeCat, setActiveCat] = useState(c.categories?.[0] || '');
  const items = [
    { name: 'Mercimek Çorbası', price: '₺45', cat: 'Çorbalar' }, { name: 'Ezogelin', price: '₺45', cat: 'Çorbalar' },
    { name: 'İskender Kebap', price: '₺220', cat: 'Ana Yemekler' }, { name: 'Tavuk Şiş', price: '₺160', cat: 'Ana Yemekler' },
    { name: 'Fırın Sütlaç', price: '₺65', cat: 'Tatlılar' }, { name: 'Künefe', price: '₺90', cat: 'Tatlılar' },
  ];
  return (
    <div className="animate-slide-up" style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#0f172a', background: 'white' }}>
      <div style={{ padding: '3rem 1.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <ChefHat style={{ width: 28, height: 28, color }} />
        </div>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{esnaf?.businessName}</h2>
        <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Dijital Menü</p>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', padding: '0 1.5rem 1rem', borderBottom: '1px solid #e2e8f0', overflowX: 'auto' }}>
        {(c.categories || []).map((cat: string) => (
          <button key={cat} onClick={() => setActiveCat(cat)} style={{
            padding: '6px 16px', borderRadius: 20, border: 'none', whiteSpace: 'nowrap',
            background: activeCat === cat ? color : '#f1f5f9', color: activeCat === cat ? 'white' : '#64748b',
            fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
          }}>{cat}</button>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: '#f8fafc' }}>
        {items.filter(i => !activeCat || i.cat === activeCat).map((item, i) => (
          <div key={i} style={{ background: 'white', padding: '1rem', borderRadius: 14, boxShadow: '0 2px 4px rgba(0,0,0,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4 }}>{item.name}</h4>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8', background: '#f1f5f9', padding: '2px 6px', borderRadius: 4 }}>{item.cat}</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color }}>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
