import { type CardData, type ThemeConfig, placeholders } from '../types';

interface CardEditorProps {
  data: CardData;
  onChange: (data: CardData) => void;
  themeConfig: ThemeConfig;
}

export default function CardEditor({ data, onChange, themeConfig }: CardEditorProps) {
  const { colors } = themeConfig;

  const handleChange = (field: keyof CardData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const inputStyle = {
    color: colors.text,
    '--focus-glow': colors.glow,
  } as React.CSSProperties;

  return (
    <div
      className="editor-panel"
      style={{ borderColor: colors.cardBorder, color: colors.text }}
    >
      <h2 className="editor-title" style={{ color: colors.titleColor }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        Viết thiệp của bạn
      </h2>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" style={{ color: colors.textMuted }} htmlFor="sender">
            Người gửi
          </label>
          <input
            id="sender"
            className="form-input"
            type="text"
            value={data.senderName}
            onChange={(e) => handleChange('senderName', e.target.value)}
            placeholder={placeholders.senderName}
            style={inputStyle}
            maxLength={50}
          />
        </div>
        <div className="form-group">
          <label className="form-label" style={{ color: colors.textMuted }} htmlFor="recipient">
            Người nhận
          </label>
          <input
            id="recipient"
            className="form-input"
            type="text"
            value={data.recipientName}
            onChange={(e) => handleChange('recipientName', e.target.value)}
            placeholder={placeholders.recipientName}
            style={inputStyle}
            maxLength={50}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" style={{ color: colors.textMuted }} htmlFor="title">
          Tiêu đề thiệp
        </label>
        <input
          id="title"
          className="form-input"
          type="text"
          value={data.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder={placeholders.title}
          style={inputStyle}
          maxLength={100}
        />
      </div>

      <div className="form-group">
        <label className="form-label" style={{ color: colors.textMuted }} htmlFor="message">
          Lời nhắn
        </label>
        <textarea
          id="message"
          className="form-textarea"
          value={data.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder={placeholders.message}
          style={inputStyle}
          maxLength={500}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" style={{ color: colors.textMuted }} htmlFor="date">
            Ngày
          </label>
          <input
            id="date"
            className="form-input"
            type="text"
            value={data.date}
            onChange={(e) => handleChange('date', e.target.value)}
            placeholder={placeholders.date}
            style={inputStyle}
            maxLength={20}
          />
        </div>
        <div className="form-group">
          <label className="form-label" style={{ color: colors.textMuted }} htmlFor="time">
            Giờ
          </label>
          <input
            id="time"
            className="form-input"
            type="text"
            value={data.time}
            onChange={(e) => handleChange('time', e.target.value)}
            placeholder={placeholders.time}
            style={inputStyle}
            maxLength={20}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" style={{ color: colors.textMuted }} htmlFor="location">
          Địa điểm
        </label>
        <input
          id="location"
          className="form-input"
          type="text"
          value={data.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder={placeholders.location}
          style={inputStyle}
          maxLength={100}
        />
      </div>
    </div>
  );
}
