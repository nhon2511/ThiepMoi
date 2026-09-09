import { useMemo } from 'react';
import { type ThemeConfig } from '../types';

interface RomanticEffectsProps {
  themeConfig: ThemeConfig;
}

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: number;
  extraDuration: string;
  extraSize: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${10 + Math.random() * 15}s`,
    size: 8 + Math.random() * 8,
    extraDuration: `${3 + Math.random() * 5}s`,
    extraSize: 3 + Math.random() * 3,
  }));
}

function generateHearts(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: '0%',
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 15}s`,
    size: 0,
    extraDuration: '0s',
    extraSize: 0,
  }));
}

export default function RomanticEffects({ themeConfig }: RomanticEffectsProps) {
  const { colors, particleType } = themeConfig;

  const particles = useMemo(() => generateParticles(12), []);
  const hearts = useMemo(() => generateHearts(6), []);

  return (
    <div className="effects-container" aria-hidden="true">
      {/* Particles based on theme */}
      {particles.map((p) => {
        if (particleType === 'petals') {
          return (
            <div
              key={`p-${p.id}`}
              className="particle petal"
              style={{
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
                backgroundColor: colors.secondary,
                width: p.size,
                height: p.size,
              }}
            />
          );
        }
        if (particleType === 'stars') {
          return (
            <div
              key={`p-${p.id}`}
              className="particle star"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.extraDuration,
                backgroundColor: colors.accent,
                boxShadow: `0 0 6px ${colors.accent}`,
                width: p.extraSize,
                height: p.extraSize,
              }}
            />
          );
        }
        // fireflies
        return (
          <div
            key={`p-${p.id}`}
            className="particle firefly"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.extraDuration,
              backgroundColor: colors.accent,
              boxShadow: `0 0 8px 2px ${colors.accent}`,
            }}
          />
        );
      })}

      {/* Floating hearts */}
      {hearts.map((h) => (
        <div
          key={`h-${h.id}`}
          className="floating-heart"
          style={{
            left: h.left,
            bottom: '-20px',
            animationDelay: h.delay,
            animationDuration: h.duration,
            color: colors.secondary,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
}
