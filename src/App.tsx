import { useState, useEffect, useCallback } from 'react';
import { themes } from './types';
import { invitationData, invitationTheme, acceptanceConfig } from './invitationData';
import RomanticEffects from './components/RomanticEffects';
import InvitationCard from './components/InvitationCard';
import AcceptedScreen from './components/AcceptedScreen';

type Phase = 'loading' | 'envelope' | 'opening' | 'revealed' | 'accepted';

/* Luxury Wax Seal SVG */
function WaxSealSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inv-wax-seal-svg">
      <defs>
        <radialGradient id="sealGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f8d7e0" />
          <stop offset="50%" stopColor="#e89cb0" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        <filter id="sealShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#5a2d3e" floodOpacity="0.35" />
        </filter>
      </defs>
      <path
        d="M32 4 C46 3, 60 14, 59 30 C58 45, 46 60, 31 60 C15 60, 3 47, 4 31 C5 15, 18 5, 32 4 Z"
        fill="url(#sealGrad)"
        filter="url(#sealShadow)"
      />
      <circle cx="32" cy="32" r="21" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
      <path
        d="M32 42 C32 42, 21 34, 21 26.5 C21 22.5, 24 20, 27.5 20 C29.8 20, 31.4 21.2, 32 22.4 C32.6 21.2, 34.2 20, 36.5 20 C40 20, 43 22.5, 43 26.5 C43 34, 32 42, 32 42 Z"
        fill="#ffffff"
        opacity="0.92"
      />
    </svg>
  );
}

function SparkleSvg({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', margin: '0 4px' }}>
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill={color} opacity="0.85" />
    </svg>
  );
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('loading');
  const themeConfig = themes[invitationTheme];
  const { colors } = themeConfig;

  useEffect(() => {
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const minDelay = new Promise((r) => setTimeout(r, 1800));
    Promise.all([fontsReady, minDelay]).then(() => setPhase('envelope'));
  }, []);

  const handleOpen = useCallback(() => {
    setPhase('opening');
    setTimeout(() => setPhase('revealed'), 1600);
  }, []);

  const handleAccept = useCallback(() => {
    setPhase('accepted');
  }, []);

  return (
    <div className="app invitation-app" style={{ background: colors.backgroundGradient, color: colors.text }}>
      <div className="inv-bg-texture" aria-hidden="true" />
      <RomanticEffects themeConfig={themeConfig} />

      <div className="invitation-stage" style={{ position: 'relative', zIndex: 1 }}>

        {phase === 'loading' && (
          <div className="inv-loading" aria-live="polite">
            <div className="inv-loading-glow" style={{ background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)` }} />
            <div className="inv-loading-content">
              <div className="inv-loading-seal-wrapper" aria-hidden="true">
                <WaxSealSvg color={colors.primary} />
              </div>
              <p className="inv-loading-text" style={{ color: colors.titleColor }}>Một thư tình đang chờ bạn...</p>
              <div className="inv-loading-dots" aria-hidden="true">
                <span style={{ backgroundColor: colors.primary }} />
                <span style={{ backgroundColor: colors.primary }} />
                <span style={{ backgroundColor: colors.primary }} />
              </div>
            </div>
          </div>
        )}

        {(phase === 'envelope' || phase === 'opening') && (
          <div className={`inv-envelope-screen ${phase === 'envelope' ? 'inv-fade-in' : ''}`}>
            
            <div className="inv-teaser-header">
              <span className="inv-teaser-subtitle">LOVE LETTER</span>
              <h2 className="inv-envelope-teaser" style={{ color: colors.titleColor }}>
                Bạn có một điều bất ngờ <SparkleSvg color={colors.primary} />
              </h2>
            </div>

            <div className="inv-envelope-halo" style={{ background: `radial-gradient(circle, ${colors.glow} 0%, transparent 65%)` }} />

            <div className={`inv-envelope-wrapper ${phase === 'opening' ? 'inv-envelope--opening' : ''}`}>
              <div className="inv-envelope">
                <div className="inv-envelope-back" style={{ backgroundColor: colors.secondary, borderColor: colors.cardBorder }}>
                  <div className="inv-envelope-pattern" />
                </div>

                <div className="inv-envelope-card-peek" style={{ background: colors.cardBg, borderColor: colors.cardBorder }}>
                  <div className="inv-peek-line title-line" style={{ backgroundColor: colors.titleColor }} />
                  <div className="inv-peek-line text-line" style={{ backgroundColor: colors.textMuted }} />
                  <div className="inv-peek-line short-line" style={{ backgroundColor: colors.secondary }} />
                </div>

                <div className="inv-envelope-left-fold" style={{ backgroundColor: colors.background }} />
                <div className="inv-envelope-right-fold" style={{ backgroundColor: colors.background }} />

                <div className="inv-envelope-body" style={{ borderColor: colors.cardBorder, backgroundColor: colors.background }}>
                  <div className="inv-envelope-inner-glow" style={{ background: `radial-gradient(ellipse at center, ${colors.glow} 0%, transparent 70%)` }} />
                </div>

                <div className="inv-envelope-flap-wrapper">
                  <div className="inv-envelope-flap" style={{ backgroundColor: colors.secondary, borderColor: colors.cardBorder }}>
                    <div className="inv-envelope-flap-inner" style={{ backgroundColor: colors.background }} />
                  </div>
                </div>

                <div className="inv-envelope-seal" aria-hidden="true">
                  <WaxSealSvg color={colors.primary} />
                </div>
              </div>
            </div>

            {phase === 'envelope' && (
              <button
                className="inv-open-btn"
                onClick={handleOpen}
                style={{ color: colors.titleColor }}
                autoFocus
              >
                <span>Mở thiệp</span>
              </button>
            )}
          </div>
        )}

        {phase === 'revealed' && (
          <InvitationCard data={invitationData} themeConfig={themeConfig} onAccept={handleAccept} />
        )}

        {phase === 'accepted' && (
          <AcceptedScreen config={acceptanceConfig} themeConfig={themeConfig} />
        )}
      </div>
    </div>
  );
}
