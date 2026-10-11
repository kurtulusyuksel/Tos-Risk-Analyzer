# ToS & Privacy Risk Analyzer (Chrome Extension)

Bu Chrome Uzantısı, kullanıcı bir web sitesinin Kullanım Koşulları (Terms of Service) veya Gizlilik Politikası sayfasını açtığında, sayfa içeriğini tarayarak LLM (Büyük Dil Modelleri) vasıtasıyla yapılandırılmış bir risk analizi raporu çıkarır.

## 🏗️ Mimari ve Veri Akışı

```text
[ Web Sayfası (DOM) ]
        │
        ▼ (chrome.scripting.executeScript)
[ Content Script / Page Metin Çıkarımı ]
        │
        ▼ (System Prompt + Prompt Injection Protection)
[ Google Gemini API (Structured Output / JSON Schema) ]
        │
        ▼
[ Deterministik Quote / Grounding Doğrulaması ]
        │
        ▼
[ Extension UI (Popup & Legal Disclaimer) ]
```
