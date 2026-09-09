import { type ThemeStyle, themes } from '../types';

interface ThemeSelectorProps {
  currentTheme: ThemeStyle;
  onThemeChange: (theme: ThemeStyle) => void;
}

export default function ThemeSelector({
  currentTheme,
  onThemeChange,
}: ThemeSelectorProps) {
  const themeList = Object.values(themes);

  return (
    <div className="theme-selector" role="radiogroup" aria-label="Chọn phong cách thiệp">
      {themeList.map((theme) => (
        <button
          key={theme.id}
          className={`theme-btn ${currentTheme === theme.id ? 'active' : ''}`}
          onClick={() => onThemeChange(theme.id)}
          style={{
            color: theme.colors.primary,
            borderColor:
              currentTheme === theme.id ? theme.colors.primary : 'transparent',
          }}
          role="radio"
          aria-checked={currentTheme === theme.id}
          aria-label={theme.name}
        >
          {theme.label}
        </button>
      ))}
    </div>
  );
}
