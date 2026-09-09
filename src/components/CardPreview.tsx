import { useState } from 'react';
import { type CardData, type ThemeConfig, placeholders } from '../types';

function OrnamentSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 55 C5 30, 15 15, 30 5 C20 20, 18 35, 20 55" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M5 55 C10 40, 25 25, 55 5 C35 18, 25 30, 20 55" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="30" cy="5" r="2" fill={color} opacity="0.5" />
      <circle cx="55" cy="5" r="1.5" fill={color} opacity="0.3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Val({ text, placeholder }: { text: string; placeholder: string }) {
  if (text.trim()) return <>{text}</>;
  return <span className="placeholder-text">{placeholder}</span>;
}

interface CardPreviewProps {
  data: CardData;
  themeConfig: ThemeConfig;
}

export default function CardPreview({ data, themeConfig }: CardPreviewProps) {
  const [isOpened, setIsOpened] = useState(false);
  const { colors } = themeConfig;

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  const hasDate = data.date.trim();
  const hasTime = data.time.trim();
  const hasLocation = data.location.trim();
  const showDetails = hasDate || hasTime || hasLocation;

  if (!isOpened) {
    return (
      <div className="preview-panel">
        <div className="card-wrapper">
          <div className="envelope-container">
            <button className="envelope" onClick={handleOpen} aria-label="Mở thiệp" style={{ color: colors.primary }}>
              <div className="envelope-flap" style={{ backgroundColor: colors.secondary, borderColor: colors.primary, opacity: 0.6 }} />
              <div className="envelope-body" style={{ backgroundColor: colors.background, borderColor: colors.primary }} />
              <span className="envelope-heart" aria-hidden="true">💌</span>
            </button>
            <button className="open-btn" onClick={handleOpen} style={{ color: colors.primary, borderColor: colors.primary }}>
              ✨ Mở thiệp
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-panel">
      <div className="card-wrapper">
        <div className="card card-reveal" style={{ background: colors.cardBg, borderColor: colors.cardBorder, color: colors.text, fontFamily: themeConfig.fontBody }}>
          {['top-left','top-right','bottom-left','bottom-right'].map(pos => (
            <div key={pos} className={`card-ornament ${pos}`} aria-hidden="true"><OrnamentSvg color={colors.primary} /></div>
          ))}

          <div className="card-recipient">
            Gửi đến <span className="name" style={{ color: colors.titleColor }}><Val text={data.recipientName} placeholder={placeholders.recipientName} /></span>
          </div>

          <h2 className="card-title" style={{ color: colors.titleColor, fontFamily: themeConfig.fontTitle }}>
            <Val text={data.title} placeholder={placeholders.title} />
          </h2>

          <div className="card-divider" style={{ color: colors.primary }} aria-hidden="true">
            <span className="card-divider-line" /><span className="card-divider-icon">♥</span><span className="card-divider-line" />
          </div>

          <p className="card-message"><Val text={data.message} placeholder={placeholders.message} /></p>

          <div className="card-details" style={{ color: colors.textMuted }}>
            {showDetails ? (
              <>
                {hasDate && <span className="card-detail-item"><CalendarIcon />{data.date}</span>}
                {hasTime && <span className="card-detail-item"><ClockIcon />{data.time}</span>}
                {hasLocation && <span className="card-detail-item"><MapPinIcon />{data.location}</span>}
              </>
            ) : (
              <>
                <span className="card-detail-item placeholder-text"><CalendarIcon />{placeholders.date}</span>
                <span className="card-detail-item placeholder-text"><ClockIcon />{placeholders.time}</span>
                <span className="card-detail-item placeholder-text"><MapPinIcon />{placeholders.location}</span>
              </>
            )}
          </div>

          <div className="card-sender">
            Với tất cả yêu thương, <span className="name" style={{ color: colors.titleColor }}><Val text={data.senderName} placeholder={placeholders.senderName} /></span>
          </div>

          <button className="card-close-btn" onClick={handleClose} style={{ color: colors.textMuted, borderColor: colors.cardBorder }}>
            Đóng thiệp
          </button>
        </div>
      </div>
    </div>
  );
}
