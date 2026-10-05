import React, { useEffect, useRef } from 'react';

interface WaveformVisualizerProps {
  isPlaying: boolean;
  progress: number; // 0 to 1
  onSeek?: (progress: number) => void;
  height?: number;
  barCount?: number;
  interactive?: boolean;
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  isPlaying,
  progress,
  onSeek,
  height = 48,
  barCount = 52,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Natural organic speech envelope: gentle hills, peaceful vocal cadence
  const baseHeightsRef = useRef<number[]>([]);
  if (baseHeightsRef.current.length === 0) {
    baseHeightsRef.current = Array.from({ length: barCount }, (_, i) => {
      const envelope = Math.sin((i / barCount) * Math.PI);
      const gentlePulse = Math.sin(i * 0.35) * 0.2 + Math.cos(i * 0.6) * 0.25 + 0.55;
      return Math.min(1, Math.max(0.2, envelope * gentlePulse));
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const render = () => {
      const width = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, width, h);

      const barWidth = Math.max(2, (width / barCount) - 3);
      const centerY = h / 2;

      for (let i = 0; i < barCount; i++) {
        const x = i * (width / barCount) + 1.5;
        const normalizedIndex = i / barCount;
        const isPlayed = normalizedIndex <= progress;

        // Subtle, peaceful vocal breathing wave when speaking
        let dynamicScale = 1;
        if (isPlaying) {
          const waveCadence = Math.sin(phase + i * 0.28) * 0.22 + Math.cos(phase * 0.7 + i * 0.15) * 0.12;
          dynamicScale = 0.82 + waveCadence;
        }

        const baseVal = baseHeightsRef.current[i] || 0.4;
        const barHeight = Math.min(h * 0.88, Math.max(5, baseVal * (h * 0.78) * dynamicScale));

        // Forest green gradient for played; soft mint sage for unplayed
        const gradient = ctx.createLinearGradient(0, centerY - barHeight / 2, 0, centerY + barHeight / 2);

        if (isPlayed) {
          gradient.addColorStop(0, '#52B788');
          gradient.addColorStop(0.5, '#2D6A4F');
          gradient.addColorStop(1, '#1B4332');
        } else {
          gradient.addColorStop(0, '#D8EED8');
          gradient.addColorStop(0.5, '#C8E6C9');
          gradient.addColorStop(1, '#B7DCB8');
        }

        ctx.fillStyle = gradient;

        const r = Math.min(barWidth / 2, 2);
        const yTop = centerY - barHeight / 2;

        ctx.beginPath();
        ctx.roundRect(x, yTop, barWidth, barHeight, r);
        ctx.fill();

        // Highlight marker near active spoken point
        if (Math.abs(normalizedIndex - progress) < (1.2 / barCount)) {
          ctx.fillStyle = '#1B4332';
          ctx.beginPath();
          ctx.arc(x + barWidth / 2, centerY, Math.max(2.5, barWidth * 0.75), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      phase += 0.06;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, progress, barCount]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!interactive || !onSeek) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const newProgress = x / rect.width;
    onSeek(newProgress);
  };

  return (
    <div className="relative w-full select-none cursor-pointer group">
      <canvas
        ref={canvasRef}
        width={500}
        height={height}
        onPointerDown={handlePointerDown}
        className="w-full h-full block rounded-lg transition-opacity"
        style={{ height: `${height}px` }}
      />
    </div>
  );
};
