import { type AcceptanceConfig, type ThemeConfig } from '../types';

interface AcceptedScreenProps {
  config: AcceptanceConfig;
  themeConfig: ThemeConfig;
}

export default function AcceptedScreen({ config, themeConfig }: AcceptedScreenProps) {
  const { colors } = themeConfig;

  return (
    <div className="inv-revealed inv-fade-in">
      <div className="inv-card-wrapper">
        <div
          className="card inv-card-enter inv-accepted-card"
          style={{
            background: colors.cardBg,
            borderColor: colors.cardBorder,
            color: colors.text,
            fontFamily: themeConfig.fontBody,
            textAlign: 'center',
          }}
        >
          <div className="inv-accepted-glow" style={{ background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)` }} />
          
          <div className="inv-accepted-badge" style={{ color: colors.titleColor }}>
            ✨ YÊU THƯƠNG ĐÃ ĐƯỢC XÁC NHẬN ✨
          </div>

          {config.imageUrl && (
            <div className="inv-accepted-img-wrapper" style={{ borderColor: colors.cardBorder }}>
              <img src={config.imageUrl} alt="Celebration" className="inv-accepted-img" />
            </div>
          )}

          <h2
            className="inv-accepted-title inv-stagger inv-s2"
            style={{ color: colors.titleColor, fontFamily: themeConfig.fontTitle }}
          >
            {config.title}
          </h2>

          <div className="card-divider inv-stagger inv-s3" style={{ color: colors.primary }} aria-hidden="true">
            <span className="card-divider-line" />
            <span className="card-divider-icon">♥</span>
            <span className="card-divider-line" />
          </div>

          <p className="inv-accepted-message inv-stagger inv-s4">
            {config.message}
          </p>

          <div className="inv-accepted-footer inv-stagger inv-s5" style={{ color: colors.textMuted }}>
            <span className="inv-accepted-heart-beat" style={{ color: colors.primary }}>♥</span> Gặp nhau sớm nhé!
          </div>
        </div>
      </div>
    </div>
  );
}