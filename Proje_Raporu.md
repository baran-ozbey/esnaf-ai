# 🏪 Esnaf AI - Proje Raporu

**Proje Adı:** Esnaf AI - Konuşarak Uygulama Üreten Yapay Zeka
**Hazırlayan:** (Adınız)
**Ders:** Yazılım Mühendisliği Projesi
**Kurum:** Samsun Üniversitesi
**Tarih:** 2026

---

## 1. Yönetici Özeti (Executive Summary)
Esnaf AI, 2026 ve sonrası için teknoloji dünyasını domine edecek olan "AI Software Engineers" (Kod Yazan Yapay Zeka Ajanları) trendini alıp, Türkiye'nin yerel pazarına (küçük işletmeler/esnaflar) entegre eden hiper-yerel bir SaaS projesidir. Kullanıcı (esnaf), hiçbir teknik bilgiye sahip olmadan sadece ihtiyaçlarını söyleyerek saniyeler içinde işletmesine özel bir mini-uygulama ürettirebilmektedir.

## 2. Araştırma ve Fikir Geliştirme (Ideation)
Y Combinator RFS (Request for Startups) ve Hacker News raporları incelendiğinde, 2026 döneminde yapay zekanın en çok değer üreteceği alanlardan birinin "B2B otonom ajanlar" (Devin, Cursor, Vercel v0) olduğu görülmüştür. Ancak bu devrimsel araçlar şu anda sadece teknik insanlara (yazılımcılara) hitap etmektedir.

**Karar:** Teknolojinin asıl yıkıcı etkisi (disruption), bu gücün teknik olmayan insanlara verilmesiyle sağlanır. Bu sebeple "Esnaf AI" konsepti geliştirilmiş; yapay zeka gücü, Türkiye'deki yüz binlerce küçük işletmenin dijitalleşmesi için yerelleştirilmiştir.

## 3. Pazar ve Problem Analizi
*   **Problem:** Berber, lokanta, çay ocağı gibi küçük işletmeler dijitalleşmek (randevu sistemi, sadakat kartı, QR menü) istemekte ancak yazılımcı tutacak veya karmaşık sistemleri öğrenecek bütçe/zamana sahip değillerdir.
*   **Çözüm:** Esnaf AI. Kullanıcı uygulamaya girer, "Berberim için müşterilerin boş saatleri görebileceği bir randevu sistemi yap" yazar. AI, saniyeler içinde o işletmenin renkleriyle çalışan bir arayüz üretir. 

## 4. Teknik Mimari ve Tasarım
Uygulama modern, vizyoner ve kullanıcı dostu bir mimariyle tasarlanmıştır:
*   **Split-Screen UI (Bölünmüş Ekran):** Sol tarafta ChatGPT benzeri iletişim kurulan akıllı bir asistan, sağ tarafta ise üretilen kodun anında render edildiği bir "Telefon Önizleme" (Mockup) ekranı bulunur.
*   **Frontend Teknolojileri:** Next.js (App Router), TypeScript, Tailwind CSS.
*   **State Management:** Zustand ile gelişmiş durum yönetimi sağlanmış, AI'ın ürettiği dinamik konfigürasyonlar (renk, ödül miktarı, menü öğeleri) React componentlerine anlık olarak bağlanmıştır (Two-way binding hissi).

## 5. Yenilikçi ve Özgün Yönler (Hocanın "100+ Puan" Beklentisi İçin)
1.  **Trend Adaptasyonu:** Sadece mevcut LLM API'lerini kullanarak soru-cevap yapan sıradan bir bot değil, "Generative UI" (Üretken Arayüz) mantığıyla çalışan bir vizyon ortaya konmuştur.
2.  **Hiper-Yerelleştirme (Localization):** Projenin sadece Türkçeye çevrilmesi değil, konseptin "Çay Ocağı, Berber, Esnaf Lokantası" gibi tamamen Türkiye'ye özgü işletme tiplerine özel çözümler (Örn: 5 çay içene 1 bedava damga kartı) sunması.
3.  **Hemen Kullanıma Hazır Çıktı:** Prototip, fikir aşamasında kalmayıp gerçekten çalışan Sadakat Kartı, Randevu Sistemi ve QR Menü alt-uygulamalarını (mini-apps) simüle etmektedir.

## 6. Sonuç
Esnaf AI, akademik bir proje olmanın ötesinde, günümüz yatırımcılarının aradığı "Büyük bir problemi yenilikçi bir teknoloji ile, ölçeklenebilir ve yerel bir şekilde çözen" (Scalable Local B2B SaaS) tam teşekküllü bir startup prototipidir.
