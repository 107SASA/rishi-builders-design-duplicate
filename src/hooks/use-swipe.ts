import { useRef, type TouchEvent } from "react";

/** Horizontal swipe on touch screens: left swipe calls onNext, right swipe calls onPrev. */
export function useSwipe(onNext: () => void, onPrev: () => void, threshold = 40) {
  const start = useRef<{ x: number; y: number } | null>(null);

  return {
    onTouchStart: (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) start.current = { x: t.clientX, y: t.clientY };
    },
    onTouchEnd: (e: TouchEvent) => {
      const s = start.current;
      const t = e.changedTouches[0];
      start.current = null;
      if (!s || !t) return;
      const dx = t.clientX - s.x;
      const dy = t.clientY - s.y;
      // Ignore short moves and mostly-vertical scrolls
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) onNext();
      else onPrev();
    },
  };
}
