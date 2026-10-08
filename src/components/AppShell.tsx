'use client';

import { useAppStore } from '@/lib/store';
import { Store, LayoutDashboard, Wand2, AppWindow, Settings, HelpCircle, LogOut, ChevronLeft, Menu } from 'lucide-react';
import Dashboard from './Dashboard';
import BuilderPage from './BuilderPage';
import MyAppsPage from './MyAppsPage';
import SettingsPage from './SettingsPage';
import HelpPage from './HelpPage';
import { useState } from 'react';

export default function AppShell() {
  const { currentPage, setPage, esnaf, logout } = useAppStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard' as const, icon: <LayoutDashboard style={{ width: 18, height: 18 }} />, label: 'Ana Sayfa' },
    { id: 'builder' as const, icon: <Wand2 style={{ width: 18, height: 18 }} />, label: 'AI ile Uygulama Yap' },
    { id: 'apps' as const, icon: <AppWindow style={{ width: 18, height: 18 }} />, label: 'Uygulamalarım' },
    { id: 'settings' as const, icon: <Settings style={{ width: 18, height: 18 }} />, label: 'Ayarlar' },
    { id: 'help' as const, icon: <HelpCircle style={{ width: 18, height: 18 }} />, label: 'Yardım & Hakkında' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'builder': return <BuilderPage />;
      case 'apps': return <MyAppsPage />;
      case 'settings': return <SettingsPage />;
      case 'help': return <HelpPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      {sidebarOpen && (
        <aside style={{
          width: 250, height: '100vh', background: 'var(--surface)', borderRight: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', flexShrink: 0
        }}>
          {/* Logo */}
          <div style={{ height: 56, padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => setPage('dashboard')}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#f97316,#fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Store style={{ width: 18, height: 18, color: 'white' }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Esnaf <span style={{ color: '#f97316' }}>AI</span></span>
            </div>
            <button className="btn btn-ghost" onClick={() => setSidebarOpen(false)} style={{ padding: 4 }}>
              <ChevronLeft style={{ width: 16, height: 16 }} />
            </button>
          </div>

          {/* User */}
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#f97316,#fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.8rem' }}>
                {esnaf?.ownerName?.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{esnaf?.businessName}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{esnaf?.businessType}</div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ padding: '0.5rem', flex: 1 }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => setPage(item.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', borderRadius: 8, border: 'none',
                  background: currentPage === item.id ? 'rgba(249,115,22,0.1)' : 'transparent',
                  color: currentPage === item.id ? '#f97316' : 'var(--muted)',
                  cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit',
                  transition: 'all 0.15s', textAlign: 'left',
                }}
                onMouseEnter={e => { if (currentPage !== item.id) e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
                onMouseLeave={e => { if (currentPage !== item.id) e.currentTarget.style.background = 'transparent'; }}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border)' }}>
            <button onClick={logout} style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 12px', borderRadius: 8, border: 'none',
              background: 'transparent', color: 'var(--muted)',
              cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit', transition: 'all 0.15s'
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ef4444'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; }}
            >
              <LogOut style={{ width: 18, height: 18 }} /> Çıkış Yap
            </button>
          </div>
        </aside>
      )}

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {!sidebarOpen && (
          <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
            <button className="btn btn-ghost" onClick={() => setSidebarOpen(true)}><Menu style={{ width: 20, height: 20 }} /></button>
          </div>
        )}
        <div style={{ flex: 1, overflow: 'auto' }}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
