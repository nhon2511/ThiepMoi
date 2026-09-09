import { useState, useEffect, useRef, useCallback } from 'react';
import { type CardData, type ThemeConfig } from '../types';

interface InvitationCardProps {
  data: CardData;
  themeConfig: ThemeConfig;
  onAccept: () => void;
}

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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function InvitationCard({ data, themeConfig, onAccept }: InvitationCardProps) {
  const { colors } = themeConfig;
  const [hasReadEnd, setHasReadEnd] = useState(false);

  // Evasive "Từ chối" button state
  const [evadeCount, setEvadeCount] = useState(0);
  const [declinePos, setDeclinePos] = useState({ x: 0, y: 0, rot: 0, scale: 1 });
  const declineBtnRef = useRef<HTMLButtonElement>(null);
  const actionsAreaRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const checkScroll = () => {
      if (hasReadEnd) return;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (docHeight <= windowHeight + 40 || scrollTop + windowHeight >= docHeight - 80) {
        setHasReadEnd(true);
      }
    };

    checkScroll();

    const timer = setTimeout(() => {
      setHasReadEnd(true);
    }, 1200);

    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [hasReadEnd]);

  // Evasive move handler
  const handleEvade = useCallback((e?: React.SyntheticEvent) => {
    if (e && e.type === 'touchstart') {
      e.preventDefault();
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setEvadeCount((prev) => prev + 1);
      return;
    }

    const container = actionsAreaRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const isMobile = window.innerWidth <= 576;

    const maxX = isMobile ? Math.min(75, rect.width / 2.5) : 110;
    const maxY = isMobile ? 35 : 55;

    let randomX = (Math.random() - 0.5) * 2 * maxX;
    let randomY = (Math.random() - 0.5) * 2 * maxY;

    if (Math.abs(randomX) < 30) {
      randomX = randomX >= 0 ? 40 : -40;
    }
    if (Math.abs(randomY) < 15) {
      randomY = randomY >= 0 ? 25 : -25;
    }

    const randomRot = (Math.random() - 0.5) * 18;
    const randomScale = 0.9 + Math.random() * 0.15;

    setDeclinePos({ x: randomX, y: randomY, rot: randomRot, scale: randomScale });
    setEvadeCount((prev) => prev + 1);
  }, []);

  const getDeclineLabel = () => {
    if (evadeCount >= 5) return 'Đừng từ chối vội 🥺';
    if (evadeCount >= 3) return 'Nút này hơi ngại đó 🙈';
    if (evadeCount >= 1) return 'Thử lại nhé? 😜';
    return 'Từ chối';
  };

  return (
    <div className="inv-revealed inv-fade-in">
      <div className="inv-card-wrapper">
        <div
          className="card inv-card-enter"
          style={{
            background: colors.cardBg,
            borderColor: colors.cardBorder,
            color: colors.text,
            fontFamily: themeConfig.fontBody,
          }}
        >
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
            <div key={pos} className={`card-ornament ${pos}`} aria-hidden="true">
              <OrnamentSvg color={colors.primary} />
            </div>
          ))}

          <div className="card-recipient inv-stagger inv-s1">
            Gửi đến{' '}
            <span className="name" style={{ color: colors.titleColor }}>{data.recipientName}</span>
          </div>

          <h1 className="card-title inv-stagger inv-s2" style={{ color: colors.titleColor, fontFamily: themeConfig.fontTitle }}>
            {data.title}
          </h1>

          <div className="card-divider inv-stagger inv-s3" style={{ color: colors.primary }} aria-hidden="true">
            <span className="card-divider-line" /><span className="card-divider-icon">♥</span><span className="card-divider-line" />
          </div>

          <p className="card-message inv-stagger inv-s4">{data.message}</p>

          <div className="card-details inv-stagger inv-s5" style={{ color: colors.textMuted }}>
            {data.date && <span className="card-detail-item"><CalendarIcon />{data.date}</span>}
            {data.time && <span className="card-detail-item"><ClockIcon />{data.time}</span>}
            {data.location && <span className="card-detail-item"><MapPinIcon />{data.location}</span>}
          </div>

          <div className="card-sender inv-stagger inv-s6">
            Thân mến,{' '}
            <span className="name" style={{ color: colors.titleColor }}>{data.senderName}</span>
          </div>

          {/* Action Choice Buttons */}
          <div
            ref={actionsAreaRef}
            className={`inv-actions-container ${hasReadEnd ? 'inv-actions-appear' : ''}`}
          >
            <button
              className="inv-btn-accept"
              onClick={onAccept}
              style={{
                backgroundColor: colors.primary,
                color: '#ffffff',
                boxShadow: `0 8px 25px -4px ${colors.glow}`,
              }}
            >
              <span>Đồng ý ❤️</span>
            </button>

            <div className="inv-btn-decline-box">
              <button
                ref={declineBtnRef}
                className="inv-btn-decline"
                onMouseEnter={handleEvade}
                onTouchStart={handleEvade}
                onPointerDown={handleEvade}
                onFocus={handleEvade}
                onClick={handleEvade}
                style={{
                  color: colors.textMuted,
                  borderColor: colors.cardBorder,
                  transform: `translate(${declinePos.x}px, ${declinePos.y}px) rotate(${declinePos.rot}deg) scale(${declinePos.scale})`,
                }}
              >
                <span>{getDeclineLabel()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
