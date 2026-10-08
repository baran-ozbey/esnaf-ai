'use client';

import { useAppStore } from '@/lib/store';
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Save, Code } from 'lucide-react';
import PreviewPhone from './PreviewPhone';
import { toast } from 'sonner';

export default function BuilderPage() {
  const { esnaf, messages, isTyping, sendMessage, currentPreview, saveApp } = useAppStore();
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    sendMessage(input.trim());
    setInput('');
  };

  const handleSave = () => {
    saveApp();
    toast.success('Uygulama kaydedildi! 🎉 "Uygulamalarım" bölümünden görebilirsiniz.');
  };

  const prompts = [
    { label: '☕ Sadakat Kartı', text: 'Müşterilerim için 5 çay alana 1 bedava veren sadakat kartı uygulaması istiyorum.' },
    { label: '✂️ Randevu Sistemi', text: 'Berber dükkanım için online randevu sistemi yap.' },
    { label: '🍽️ Dijital Menü', text: 'Lokantam için karekodlu dijital menü istiyorum.' },
  ];

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Chat */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)' }}>
        {/* Chat header */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>AI Uygulama Yapıcı</h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0 }}>Ne istediğinizi yazın, AI sizin için oluştursun</p>
          </div>
          {currentPreview.type !== 'none' && currentPreview.status === 'ready' && (
            <button className="btn btn-primary" onClick={handleSave} style={{ fontSize: '0.8rem' }}>
              <Save style={{ width: 14, height: 14 }} /> Uygulamayı Kaydet
            </button>
          )}
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map(msg => (
            <div key={msg.id} className="animate-slide-up" style={{ display: 'flex', gap: '0.75rem', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                background: msg.role === 'user' ? '#f97316' : '#1e293b', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {msg.role === 'user' ? <User style={{ width: 16, height: 16 }} /> : <Bot style={{ width: 16, height: 16 }} />}
              </div>
              <div style={{
                maxWidth: '75%', padding: '1rem', borderRadius: 16,
                borderTopRightRadius: msg.role === 'user' ? 4 : 16,
                borderTopLeftRadius: msg.role === 'assistant' ? 4 : 16,
                background: msg.role === 'user' ? '#f97316' : 'var(--background)',
                color: msg.role === 'user' ? 'white' : 'var(--foreground)',
                border: msg.role === 'user' ? 'none' : '1px solid var(--border)',
                fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-wrap'
              }}>
                {msg.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="animate-slide-up" style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: '#1e293b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot style={{ width: 16, height: 16 }} />
              </div>
              <div style={{ padding: '1rem', borderRadius: 16, borderTopLeftRadius: 4, background: 'var(--background)', border: '1px solid var(--border)', display: 'flex', gap: 4, alignItems: 'center' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--muted)', animation: 'pulse 1s infinite' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--muted)', animation: 'pulse 1s infinite 0.2s' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--muted)', animation: 'pulse 1s infinite 0.4s' }} />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div style={{ padding: '0 1.5rem 0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {prompts.map((p, i) => (
              <button key={i} className="btn" style={{ background: 'var(--background)', border: '1px solid var(--border)', fontSize: '0.75rem' }}
                onClick={() => setInput(p.text)}>
                {p.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ position: 'relative' }}>
            <input className="input" style={{ paddingRight: 50, height: 52, borderRadius: 26, paddingLeft: 20 }}
              placeholder="Ne tür bir uygulama istiyorsunuz? Bana anlatın..."
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              disabled={isTyping}
            />
            <button className="btn btn-primary" style={{ position: 'absolute', right: 6, top: 6, bottom: 6, borderRadius: 20, padding: '0 16px' }}
              onClick={handleSend} disabled={!input.trim() || isTyping}>
              <Send style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: '1rem', color: 'var(--muted)', justifyContent: 'center' }}>
            <Code style={{ width: 18, height: 18 }} /> Canlı Önizleme
          </h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 4 }}>AI tarafından yazılan kod burada anında çalışır</p>
        </div>
        <PreviewPhone />
      </div>
    </div>
  );
}
