// =============================================================
// NETIZEN WARAS — Cyberbullying Statistics Data
// Mahasiswa: Putra Dharma Prajna Adhitthana Bun | NIM: 32230161
// Program Studi: Informatika | Universitas Bunda Mulia
// Email: s32230161@student.ubm.ac.id
// =============================================================

export const platformStats = [
  {
    platform: 'Instagram',
    percentage: 32,
    color: '#E1306C',
    icon: '📸',
    description: 'Platform foto & video terbesar dengan tingkat cyberbullying tertinggi',
    source: 'Statista Digital Media Report 2023',
  },
  {
    platform: 'TikTok',
    percentage: 28,
    color: '#69C9D0',
    icon: '🎵',
    description: 'Platform video pendek dengan pengguna Gen-Z terbesar',
    source: 'Statista Digital Media Report 2023',
  },
  {
    platform: 'Twitter/X',
    percentage: 21,
    color: '#1DA1F2',
    icon: '🐦',
    description: 'Platform mikroblog dengan komentar publik yang rentan terhadap serangan massal',
    source: 'Statista Digital Media Report 2023',
  },
  {
    platform: 'Facebook',
    percentage: 19,
    color: '#1877F2',
    icon: '👥',
    description: 'Platform media sosial tertua dengan jangkauan demografis luas',
    source: 'Statista Digital Media Report 2023',
  },
];

export const roleDistribution = [
  {
    role: 'Saksi (Bystander)',
    percentage: 40,
    color: '#F59E0B',
    description:
      'Orang yang menyaksikan cyberbullying terjadi. Bystander memiliki kekuatan besar untuk menghentikan bullying dengan cara speak up, tidak ikut tertawa, atau melaporkan konten.',
    source: 'UNICEF Cyberbullying Study 2019',
  },
  {
    role: 'Korban (Victim)',
    percentage: 35,
    color: '#EF4444',
    description:
      'Orang yang menjadi target langsung cyberbullying. Korban seringkali mengalami dampak psikologis yang serius termasuk depresi dan kecemasan.',
    source: 'UNICEF Cyberbullying Study 2019',
  },
  {
    role: 'Pelaku (Perpetrator)',
    percentage: 25,
    color: '#7C3AED',
    description:
      'Orang yang melakukan cyberbullying. Pelaku seringkali termotivasi oleh anonimitas internet, tekanan kelompok, atau rendahnya empati digital.',
    source: 'UNICEF Cyberbullying Study 2019',
  },
];

export const indonesiaStats = [
  {
    label: 'Pengguna Internet Indonesia',
    value: '215 Juta',
    percentage: 77,
    source: 'APJII 2023',
    icon: '🌐',
  },
  {
    label: 'Mengalami Cyberbullying',
    value: '45%',
    percentage: 45,
    source: 'Kominfo 2023',
    icon: '😔',
  },
  {
    label: 'Remaja (13-18 Tahun)',
    value: '63%',
    percentage: 63,
    source: 'KPAI 2022',
    icon: '👦',
  },
  {
    label: 'Tidak Melapor',
    value: '72%',
    percentage: 72,
    source: 'Yayasan Pulih 2022',
    icon: '🤐',
  },
];

export const mentalHealthImpacts = [
  {
    impact: 'Kecemasan (Anxiety)',
    severity: 78,
    color: '#F97316',
    description:
      'Korban cyberbullying 3x lebih mungkin mengalami gangguan kecemasan dibanding mereka yang tidak pernah dibully online.',
    source: 'American Psychological Association, 2022',
  },
  {
    impact: 'Depresi',
    severity: 71,
    color: '#EF4444',
    description:
      'Perempuan yang dibully online memiliki risiko depresi 2,5x lebih tinggi. Remaja yang mengalami cyberbullying lebih rentan terhadap pikiran menyakiti diri sendiri.',
    source: 'Journal of Adolescent Health, 2021',
  },
  {
    impact: 'Rendah Diri (Low Self-Esteem)',
    severity: 65,
    color: '#8B5CF6',
    description:
      'Serangan personal dan komentar negatif berulang secara signifikan merusak citra diri dan kepercayaan diri jangka panjang.',
    source: 'APA Monitor on Psychology, 2022',
  },
  {
    impact: 'Menarik Diri Sosial',
    severity: 58,
    color: '#6366F1',
    description:
      'Korban cenderung menghindari interaksi sosial baik online maupun offline, yang dapat menyebabkan isolasi dan kesepian kronis.',
    source: 'Cyberbullying Research Center, 2023',
  },
  {
    impact: 'Prestasi Akademik Menurun',
    severity: 52,
    color: '#EC4899',
    description:
      'Stres akibat cyberbullying mengganggu konsentrasi belajar, mengakibatkan penurunan nilai dan absensi di sekolah.',
    source: 'UNESCO Global Report on Bullying, 2021',
  },
];

export const ageGroupData = [
  { age: '10-12 thn', victims: 28, source: 'KPAI 2022' },
  { age: '13-15 thn', victims: 45, source: 'KPAI 2022' },
  { age: '16-18 thn', victims: 63, source: 'KPAI 2022' },
  { age: '19-24 thn', victims: 38, source: 'Kominfo 2023' },
  { age: '25-34 thn', victims: 22, source: 'Kominfo 2023' },
  { age: '35+ thn', victims: 14, source: 'Kominfo 2023' },
];
