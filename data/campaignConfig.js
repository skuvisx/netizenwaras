// =============================================================
// NETIZEN WARAS — Campaign Config
// Edit file ini untuk mengupdate poster dan video kampanye.
// Setelah edit & push ke GitHub, Vercel otomatis update!
// =============================================================

export const campaignConfig = {

  // ──────────────────────────────────────────────
  // POSTER INSTAGRAM
  // Cara isi: Paste URL post Instagram kamu
  // Contoh: "https://www.instagram.com/p/XXXXXXXXXX/"
  // ──────────────────────────────────────────────
  poster: {
    instagramUrl: "https://www.instagram.com/p/DWWytvHE7Or/?igsh=MXNpMnFnMjM2YXllbg==", // ← PASTE LINK POST INSTAGRAM KAMU DI SINI
    caption: "Poster Kampanye #NetizenWaras",
    hashtags: ["#NetizenWaras", "#AntiCyberbullying", "#EmpatiDigital"],
  },

  // ──────────────────────────────────────────────
  // VIDEO KAMPANYE
  // ──────────────────────────────────────────────
  videos: [
    {
      platform: "tiktok",
      url: "", // ← PASTE LINK POST TIKTOK KAMU DI SINI
      // Contoh: "https://www.tiktok.com/@username/video/1234567890"
      title: "Video Kampanye TikTok",
      description: "Kampanye #NetizenWaras di TikTok",
    },
    {
      platform: "instagram",
      url: "", // ← PASTE LINK POST INSTAGRAM REELS KAMU DI SINI
      // Contoh: "https://www.instagram.com/reel/XXXXXXXXXX/"
      title: "Instagram Reels Kampanye",
      description: "Kampanye #NetizenWaras di Instagram",
    },
  ],
};
