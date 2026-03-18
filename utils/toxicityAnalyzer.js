// =============================================================
// NETIZEN WARAS — Toxicity Analyzer Utility
// Mahasiswa: Putra Dharma Prajna Adhitthana Bun | NIM: 32230161
// =============================================================

// Keyword lexicon for Indonesian & mixed language toxicity analysis
// Inspired by: Google Perspective API & Hate Speech Detection Research

const KEYWORD_LEXICON = {
  // Hate speech triggers (weight: 0.85 - 1.0)
  hate: {
    words: [
      'bangsat', 'babi', 'anjing', 'goblok', 'idiot', 'tolol', 'bodoh banget',
      'sampah masyarakat', 'dasar [', 'tidak layak', 'tidak pantas disebut',
      'lebih baik mati', 'bunuh diri aja', 'hapus dari muka bumi',
      'ras lu', 'agama lu', 'kelompok kalian', 'kaum lu',
      'parasit', 'tidak berguna hidup', 'harap menghilang',
    ],
    weight: 0.90,
    minScore: 0.80,
  },

  // Toxic triggers (weight: 0.55 - 0.80)
  toxic: {
    words: [
      'muka kamu', 'muka lu', 'bikin mual', 'bikin sakit mata',
      'malu-maluin', 'gak punya malu', 'ngapain hidup',
      'percuma', 'gak ada gunanya', 'receh', 'expired',
      'topeng', 'fake semua', 'gak ada yang sayang',
      'cancel', 'retire aja', 'mental baja',
      'kapan berhenti', 'mending diam', 'mental lemah',
      'memalukan', 'pura-pura', 'validasi murahan',
    ],
    weight: 0.68,
    minScore: 0.55,
  },

  // Criticism triggers (weight: 0.30 - 0.55)
  criticism: {
    words: [
      'jelek', 'buruk', 'mengecewakan', 'payah', 'amatir',
      'tidak profesional', 'belajar dulu', 'tidak jelas',
      'salah semua', 'ngasal', 'asal-asalan', 'tidak berguna',
      'misleading', 'kurang riset', 'clickbait', 'tidak original',
      'tidak konsisten', 'ketinggalan', 'basi', 'gak masuk akal',
      'terlalu banyak', 'kurang persiapan',
    ],
    weight: 0.42,
    minScore: 0.30,
  },

  // Positive indicators (weight: reduces toxicity)
  positive: {
    words: [
      'bagus', 'keren', 'mantap', 'luar biasa', 'hebat', 'amazing',
      'inspiratif', 'membantu', 'bermanfaat', 'terima kasih',
      'makasih', 'suka', 'love', 'senang', 'semangat',
      'keep up', 'proud', 'salut', 'kagum', 'top',
      'terbaik', 'berkualitas', 'edukatif',
    ],
    weight: -0.40,
    minScore: 0,
  },
};

// Context modifiers
const CONTEXT_MODIFIERS = {
  amplifiers: ['banget', 'sangat', 'sekali', 'parah', 'abis', 'bgt', 'bener-bener', 'literally'],
  negations: ['tidak', 'bukan', 'jangan', 'gak', 'gak ada', 'nggak', 'enggak'],
  intensifiers: ['paling', 'super', 'ultra', 'mega', 'ekstrem'],
};

/**
 * Analyzes comment text and returns toxicity score + category
 * @param {string} text - The comment text to analyze
 * @returns {{ score: number, category: string, explanation: string, suggestions: string[] }}
 */
export function analyzeComment(text) {
  if (!text || text.trim().length === 0) {
    return { score: 0, category: 'neutral', explanation: 'Komentar kosong.', suggestions: [] };
  }

  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);
  let rawScore = 0.1; // baseline
  let matchedCategories = {};

  // Scan for keyword matches
  for (const [category, data] of Object.entries(KEYWORD_LEXICON)) {
    let categoryMatches = 0;
    for (const keyword of data.words) {
      if (lower.includes(keyword)) {
        categoryMatches++;
        rawScore += data.weight / data.words.length * 3;
      }
    }
    if (categoryMatches > 0) {
      matchedCategories[category] = categoryMatches;
    }
  }

  // Context amplifiers
  let amplified = false;
  for (const amp of CONTEXT_MODIFIERS.amplifiers) {
    if (lower.includes(amp)) {
      rawScore *= 1.15;
      amplified = true;
      break;
    }
  }

  // Exclamation marks increase intensity
  const exclamations = (text.match(/!/g) || []).length;
  rawScore += exclamations * 0.04;

  // ALL CAPS increases toxicity
  const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;
  if (capsRatio > 0.5 && text.length > 5) {
    rawScore *= 1.2;
  }

  // Personal pronouns targeting
  const targetPronounsId = ['kamu', 'lu', 'lo', 'elu', 'dia', 'mereka', 'kalian'];
  for (const pronoun of targetPronounsId) {
    if (lower.includes(pronoun)) {
      rawScore *= 1.05;
      break;
    }
  }

  // Clamp to [0, 1]
  const score = Math.max(0, Math.min(1, rawScore));

  // Determine final category
  let category;
  let explanation;
  let suggestions = [];

  if (score >= 0.80) {
    category = 'hate';
    explanation = 'Komentar ini terdeteksi sebagai ujaran kebencian (hate speech). Konten ini mengandung serangan personal berat, diskriminasi, atau ancaman yang dapat menyebabkan trauma psikologis serius pada korban.';
    suggestions = [
      'Hapus komentar ini dan jangan kirim',
      'Pikirkan dampak kata-katamu terhadap orang nyata di balik layar',
      'Jika kamu melihat komentar seperti ini, laporkan ke platform',
      'Coba ekspresikan ketidaksetujuanmu dengan cara yang sopan dan berbasis fakta',
    ];
  } else if (score >= 0.55) {
    category = 'toxic';
    explanation = 'Komentar ini bersifat toxic. Mengandung serangan personal, hinaan, atau konten yang dapat merusak harga diri seseorang secara signifikan.';
    suggestions = [
      'Hindari menyerang penampilan atau karakter pribadi seseorang',
      'Fokus pada konten, bukan pada orang yang membuat konten',
      'Tanya diri sendiri: "Apakah aku mau mendengar ini dari orang lain?"',
      'Versi yang lebih baik: sampaikan ketidaksukaanmu tanpa menyerang orangnya',
    ];
  } else if (score >= 0.30) {
    category = 'criticism';
    explanation = 'Komentar ini adalah kritik. Bisa konstruktif jika disampaikan dengan cara yang tepat, namun beberapa pilihan kata bisa terasa menyerang.';
    suggestions = [
      'Tambahkan saran spesifik agar kritikmu lebih konstruktif',
      'Gunakan frasa "menurutku" atau "mungkin bisa dicoba" untuk memperlunak',
      'Akui dulu hal yang positif sebelum menyampaikan kritik',
    ];
  } else if (score >= 0.15) {
    category = 'neutral';
    explanation = 'Komentar ini bersifat netral. Tidak mengandung unsur positif maupun negatif yang kuat.';
    suggestions = [
      'Komentar ini sudah cukup aman, tapi bisa lebih baik dengan menambahkan sesuatu yang membangun',
    ];
  } else {
    category = 'positive';
    explanation = 'Komentar ini bersifat positif dan membangun. Komentar seperti ini membantu menciptakan ekosistem internet yang lebih sehat!';
    suggestions = [
      'Pertahankan! Komentar positif seperti ini bisa membuat hari seseorang menjadi lebih baik',
    ];
  }

  return {
    score: parseFloat(score.toFixed(2)),
    category,
    explanation,
    suggestions,
    matchedKeywords: Object.keys(matchedCategories),
    amplified,
  };
}

/**
 * Get color for toxicity category
 */
export function getCategoryColor(category) {
  const colors = {
    positive: '#10B981',
    neutral: '#F59E0B',
    criticism: '#F97316',
    toxic: '#EF4444',
    hate: '#7F1D1D',
  };
  return colors[category] || '#9CA3AF';
}

/**
 * Get emoji for toxicity category
 */
export function getCategoryEmoji(category) {
  const emojis = {
    positive: '💚',
    neutral: '🟡',
    criticism: '🟠',
    toxic: '🔴',
    hate: '⛔',
  };
  return emojis[category] || '⚪';
}

/**
 * Get label for toxicity category (Indonesian)
 */
export function getCategoryLabel(category) {
  const labels = {
    positive: 'Positif',
    neutral: 'Netral',
    criticism: 'Kritik',
    toxic: 'Toxic',
    hate: 'Ujaran Kebencian',
  };
  return labels[category] || 'Tidak Diketahui';
}

/**
 * Get toxicity meter color gradient based on score
 */
export function getToxicityGradient(score) {
  if (score < 0.15) return 'from-emerald-500 to-emerald-400';
  if (score < 0.30) return 'from-yellow-500 to-yellow-400';
  if (score < 0.55) return 'from-orange-500 to-orange-400';
  if (score < 0.80) return 'from-red-500 to-red-400';
  return 'from-red-800 to-red-900';
}

/**
 * Suggest a polite rewrite for toxic/hate comments
 */
export function suggestPoliteRewrite(text, category) {
  const rewrites = {
    hate: 'Aku kurang setuju dengan pendapat ini karena [alasan spesifik]. Mungkin kita bisa diskusi lebih lanjut?',
    toxic: 'Menurutku konten ini bisa lebih baik lagi di beberapa aspek, seperti [aspek spesifik].',
    criticism: 'Ada beberapa hal yang bisa diperbaiki, seperti [hal spesifik]. Secara keseluruhan sudah ada progress yang baik.',
  };
  return rewrites[category] || text;
}
