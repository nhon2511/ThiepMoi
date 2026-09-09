import { type CardData, type ThemeConfig } from '../types';

interface InvitationCardProps {
  data: CardData;
  themeConfig: ThemeConfig;
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

export default function InvitationCard({ data, themeConfig }: InvitationCardProps) {
  const { colors } = themeConfig;

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
        </div>
      </div>
    </div>
  );
}
