import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ===================== TYPES =====================
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface MiniApp {
  id: string;
  name: string;
  type: 'loyalty' | 'appointment' | 'menu';
  createdAt: number;
  config: Record<string, any>;
  status: 'active' | 'paused';
}

export interface Esnaf {
  id: string;
  businessName: string;
  businessType: string;
  ownerName: string;
}

// ===================== STATE =====================
interface AppState {
  // Auth
  esnaf: Esnaf | null;
  isAuthenticated: boolean;

  // Navigation
  currentPage: 'landing' | 'dashboard' | 'builder' | 'apps' | 'settings' | 'help';

  // AI Builder
  messages: Message[];
  isTyping: boolean;
  currentPreview: { type: 'none' | 'loyalty' | 'appointment' | 'menu'; status: 'idle' | 'generating' | 'ready'; config: Record<string, any> };

  // My Apps
  myApps: MiniApp[];

  // Stats
  stats: { totalApps: number; totalCustomers: number; totalViews: number; monthlyGrowth: number };

  // Actions
  login: (name: string, businessName: string, type: string) => void;
  loginDemo: () => void;
  logout: () => void;
  setPage: (page: AppState['currentPage']) => void;
  sendMessage: (content: string) => void;
  updatePreviewConfig: (updates: Record<string, any>) => void;
  saveApp: () => void;
  deleteApp: (id: string) => void;
  reset: () => void;
}

// ===================== AI RESPONSE LOGIC =====================
function getAIResponse(content: string, esnaf: Esnaf | null): { text: string; appType: 'loyalty' | 'appointment' | 'menu' | null; config: Record<string, any> } {
  const lower = content.toLowerCase();

  if (lower.includes('sadakat') || lower.includes('damga') || lower.includes('kart') || lower.includes('bedava') || lower.includes('puan')) {
    const stampsMatch = lower.match(/(\d+)/);
    const stamps = stampsMatch ? Math.min(parseInt(stampsMatch[1]), 10) : 5;
    return {
      text: `Harika bir fikir! 🎉 ${esnaf?.businessName || 'İşletmeniz'} için bir **Sadakat Kartı** uygulaması hazırlıyorum.\n\n📋 Ayarlar:\n• Her ${stamps} alışverişte 1 ödül\n• Dijital damga sistemi\n• Müşteri takip paneli\n\nSağ taraftaki telefon ekranında uygulamanızı görebilirsiniz. Beğenmezseniz değiştirebiliriz!`,
      appType: 'loyalty',
      config: { primaryColor: '#f97316', stampsRequired: stamps, rewardText: '1 Ücretsiz Ürün', stampsCollected: 0 }
    };
  }

  if (lower.includes('randevu') || lower.includes('berber') || lower.includes('kuaför') || lower.includes('saat') || lower.includes('rezervasyon')) {
    return {
      text: `Mükemmel! ✂️ ${esnaf?.businessName || 'İşletmeniz'} için bir **Online Randevu Sistemi** oluşturuyorum.\n\n📋 Ayarlar:\n• Çalışma saatleri: 09:00 - 19:00\n• Hizmetler: Saç Kesimi, Sakal Kesimi, Cilt Bakımı\n• Müşteriler telefondan boş saatleri görüp randevu alabilir\n\nSağ taraftaki telefon ekranında test edebilirsiniz!`,
      appType: 'appointment',
      config: { primaryColor: '#3b82f6', workingHours: '09:00 - 19:00', services: ['Saç Kesimi', 'Sakal Kesimi', 'Cilt Bakımı'] }
    };
  }

  if (lower.includes('menü') || lower.includes('menu') || lower.includes('lokanta') || lower.includes('restoran') || lower.includes('yemek') || lower.includes('kafe') || lower.includes('qr')) {
    return {
      text: `Lezzetli bir seçim! 🍽️ ${esnaf?.businessName || 'İşletmeniz'} için **QR Kodlu Dijital Menü** hazırlıyorum.\n\n📋 Ayarlar:\n• Kategoriler: Çorbalar, Ana Yemekler, Tatlılar\n• Fotoğraflı ve fiyatlı menü\n• Müşteriler QR kodu telefonlarından okutarak menüye ulaşır\n\nSağ taraftaki telefon ekranında menünüzü görebilirsiniz!`,
      appType: 'menu',
      config: { primaryColor: '#ef4444', categories: ['Çorbalar', 'Ana Yemekler', 'Tatlılar'] }
    };
  }

  return {
    text: `Anladım! Size yardımcı olmak isterim. Şu anda şu 3 uygulama türünü üretebiliyorum:\n\n☕ **Sadakat Kartı** — "5 kahve alana 1 bedava"\n✂️ **Randevu Sistemi** — "Müşteriler online randevu alsın"\n🍽️ **Dijital Menü** — "QR kodlu menü istiyorum"\n\nHangi birini istersiniz?`,
    appType: null,
    config: {}
  };
}

// ===================== STORE =====================
export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      esnaf: null,
      isAuthenticated: false,
      currentPage: 'landing',
      messages: [],
      isTyping: false,
      currentPreview: { type: 'none', status: 'idle', config: {} },
      myApps: [],
      stats: { totalApps: 0, totalCustomers: 0, totalViews: 0, monthlyGrowth: 0 },

      login: (ownerName, businessName, businessType) => {
        set({
          esnaf: { id: '1', ownerName, businessName, businessType },
          isAuthenticated: true,
          currentPage: 'dashboard',
          messages: [{
            id: 'welcome',
            role: 'assistant',
            content: `Merhaba ${ownerName}! 👋 Ben Esnaf AI, ${businessName} için yapay zeka asistanınız.\n\nBana ne tür bir uygulama istediğinizi söyleyin, anında sizin için oluşturayım. Örneğin:\n• "Sadakat kartı uygulaması istiyorum"\n• "Randevu sistemi yap"\n• "QR kodlu dijital menü oluştur"`,
            timestamp: Date.now()
          }]
        });
      },

      loginDemo: () => {
        set({
          esnaf: { id: 'demo', ownerName: 'Baran Özbey', businessName: 'Özbey Kardeşler', businessType: 'Kafe / Çay Ocağı' },
          isAuthenticated: true,
          currentPage: 'dashboard',
          messages: [{
            id: 'welcome',
            role: 'assistant',
            content: 'Merhaba Baran Bey! 👋 Ben Esnaf AI, Özbey Kardeşler için yapay zeka asistanınız.\n\nBana ne tür bir uygulama istediğinizi söyleyin, anında sizin için oluşturayım.',
            timestamp: Date.now()
          }],
          myApps: [
            {
              id: 'demo-1', name: 'Sadakat Kartı', type: 'loyalty', createdAt: Date.now() - 86400000 * 3,
              config: { primaryColor: '#f97316', stampsRequired: 5, rewardText: '1 Ücretsiz Çay', stampsCollected: 3 }, status: 'active'
            },
            {
              id: 'demo-2', name: 'Dijital Menü', type: 'menu', createdAt: Date.now() - 86400000,
              config: { primaryColor: '#ef4444', categories: ['Çaylar', 'Kahveler', 'Atıştırmalıklar'] }, status: 'active'
            }
          ],
          stats: { totalApps: 2, totalCustomers: 147, totalViews: 1283, monthlyGrowth: 23 }
        });
      },

      logout: () => {
        set({
          esnaf: null, isAuthenticated: false, currentPage: 'landing',
          messages: [], currentPreview: { type: 'none', status: 'idle', config: {} },
          myApps: [], stats: { totalApps: 0, totalCustomers: 0, totalViews: 0, monthlyGrowth: 0 }
        });
      },

      setPage: (page) => set({ currentPage: page }),

      sendMessage: (content) => {
        const userMsg: Message = { id: Date.now().toString(), role: 'user', content, timestamp: Date.now() };
        set(s => ({ messages: [...s.messages, userMsg], isTyping: true }));

        setTimeout(() => {
          const { text, appType, config } = getAIResponse(content, get().esnaf);

          if (appType) {
            set({ currentPreview: { type: appType, status: 'generating', config } });
            setTimeout(() => {
              set(s => ({ currentPreview: { ...s.currentPreview, status: 'ready' } }));
            }, 2000);
          }

          set(s => ({
            messages: [...s.messages, { id: (Date.now() + 1).toString(), role: 'assistant', content: text, timestamp: Date.now() }],
            isTyping: false
          }));
        }, 1200);
      },

      updatePreviewConfig: (updates) => {
        set(s => ({ currentPreview: { ...s.currentPreview, config: { ...s.currentPreview.config, ...updates } } }));
      },

      saveApp: () => {
        const state = get();
        if (state.currentPreview.type === 'none') return;
        const names: Record<string, string> = { loyalty: 'Sadakat Kartı', appointment: 'Randevu Sistemi', menu: 'Dijital Menü' };
        const newApp: MiniApp = {
          id: Date.now().toString(),
          name: names[state.currentPreview.type] || 'Uygulama',
          type: state.currentPreview.type as MiniApp['type'],
          createdAt: Date.now(),
          config: { ...state.currentPreview.config },
          status: 'active'
        };
        set(s => ({
          myApps: [...s.myApps, newApp],
          stats: { ...s.stats, totalApps: s.stats.totalApps + 1 },
          currentPreview: { type: 'none', status: 'idle', config: {} }
        }));
      },

      deleteApp: (id) => {
        set(s => ({
          myApps: s.myApps.filter(a => a.id !== id),
          stats: { ...s.stats, totalApps: Math.max(0, s.stats.totalApps - 1) }
        }));
      },

      reset: () => get().logout(),
    }),
    { 
      name: 'esnaf-ai-storage',
      version: 2
    }
  )
);
