export type ThemeStyle = 'romantic-rose' | 'moonlight-dream' | 'soft-sunset';

export interface AcceptanceConfig {
  imageUrl: string;
  title: string;
  message: string;
}

export interface CardData {
  senderName: string;
  recipientName: string;
  title: string;
  message: string;
  date: string;
  time: string;
  location: string;
}

export const defaultCardData: CardData = {
  senderName: '',
  recipientName: '',
  title: '',
  message: '',
  date: '',
  time: '',
  location: '',
};

export const placeholders: CardData = {
  senderName: 'Người gửi yêu thương',
  recipientName: 'Người nhận yêu dấu',
  title: 'Lời mời từ trái tim',
  message:
    'Anh muốn mời em một buổi đi chơi riêng, để cùng nhau uống cà phê, ăn một chút gì đó và nói chuyện nhiều hơn ngoài màn hình...',
  date: '14/02/2027',
  time: '18:00',
  location: 'Nơi chỉ có chúng mình',
};

export interface ThemeConfig {
  id: ThemeStyle;
  name: string;
  label: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundGradient: string;
    cardBg: string;
    cardBorder: string;
    text: string;
    textMuted: string;
    titleColor: string;
    glow: string;
  };
  fontTitle: string;
  fontBody: string;
  particleType: 'petals' | 'stars' | 'fireflies';
}

export const themes: Record<ThemeStyle, ThemeConfig> = {
  'romantic-rose': {
    id: 'romantic-rose',
    name: 'Romantic Rose',
    label: '🌹 Romantic Rose',
    colors: {
      primary: '#c45b7c',
      secondary: '#f4a0b5',
      accent: '#d4956a',
      background: '#fdf2f4',
      backgroundGradient:
        'linear-gradient(135deg, #fdf2f4 0%, #fce4ec 30%, #f8d7e0 60%, #fdf2f4 100%)',
      cardBg:
        'linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(253,242,244,0.98) 50%, rgba(252,228,236,0.95) 100%)',
      cardBorder: 'rgba(196, 91, 124, 0.2)',
      text: '#5a2d3e',
      textMuted: '#9e7189',
      titleColor: '#c45b7c',
      glow: 'rgba(196, 91, 124, 0.15)',
    },
    fontTitle: "'Playfair Display', 'Georgia', serif",
    fontBody: "'Inter', 'Segoe UI', sans-serif",
    particleType: 'petals',
  },
  'moonlight-dream': {
    id: 'moonlight-dream',
    name: 'Moonlight Dream',
    label: '🌙 Moonlight Dream',
    colors: {
      primary: '#7c6daa',
      secondary: '#b8a9d4',
      accent: '#c9b896',
      background: '#f0eef5',
      backgroundGradient:
        'linear-gradient(135deg, #f0eef5 0%, #e8e4f0 30%, #ddd8eb 60%, #f0eef5 100%)',
      cardBg:
        'linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(240,238,245,0.98) 50%, rgba(232,228,240,0.95) 100%)',
      cardBorder: 'rgba(124, 109, 170, 0.2)',
      text: '#3d3556',
      textMuted: '#8578a0',
      titleColor: '#7c6daa',
      glow: 'rgba(124, 109, 170, 0.15)',
    },
    fontTitle: "'Playfair Display', 'Georgia', serif",
    fontBody: "'Inter', 'Segoe UI', sans-serif",
    particleType: 'stars',
  },
  'soft-sunset': {
    id: 'soft-sunset',
    name: 'Soft Sunset',
    label: '🌅 Soft Sunset',
    colors: {
      primary: '#c47a5a',
      secondary: '#e8b89d',
      accent: '#d4a574',
      background: '#fdf6f0',
      backgroundGradient:
        'linear-gradient(135deg, #fdf6f0 0%, #faeee4 30%, #f5e0d0 60%, #fdf6f0 100%)',
      cardBg:
        'linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(253,246,240,0.98) 50%, rgba(250,238,228,0.95) 100%)',
      cardBorder: 'rgba(196, 122, 90, 0.2)',
      text: '#5a3d2d',
      textMuted: '#9e8171',
      titleColor: '#c47a5a',
      glow: 'rgba(196, 122, 90, 0.15)',
    },
    fontTitle: "'Playfair Display', 'Georgia', serif",
    fontBody: "'Inter', 'Segoe UI', sans-serif",
    particleType: 'fireflies',
  },
};
