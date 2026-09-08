"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { WeekPlan } from "./course-data";

export default function TeachingCalendar({ items }: { items: WeekPlan[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "auto") => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = viewport.querySelectorAll<HTMLElement>("[data-week-card]");
    const first = cards[0];
    const target = cards[index];
    if (!first || !target) return;
    viewport.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior });
  }, []);

  const moveTo = useCallback((index: number) => {
    const normalized = (index + items.length) % items.length;
    scrollToIndex(normalized, "auto");
    setActive(normalized);
  }, [items.length, scrollToIndex]);

  useEffect(() => {
    scrollToIndex(active, "auto");
  }, [active, scrollToIndex]);

  useEffect(() => {
    const handleResize = () => scrollToIndex(active, "auto");
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active, scrollToIndex]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % items.length), 4200);
    return () => window.clearTimeout(timer);
  }, [active, items.length, paused]);

  return (
    <div className="teaching-calendar" aria-roledescription="轮播" aria-label="第 1 至 16 周教学日历">
      <div className="calendar-toolbar">
        <label>
          <span>快速定位周次</span>
          <select value={active} onChange={(event) => moveTo(Number(event.target.value))}>
            {items.map((item, index) => <option value={index} key={item.week}>第 {item.week} 周 · {item.title}</option>)}
          </select>
        </label>
        <div className="carousel-controls">
          <button type="button" onClick={() => moveTo(active - 1)} aria-label="上一周">←</button>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>{paused ? "继续" : "暂停"}</button>
          <button type="button" onClick={() => moveTo(active + 1)} aria-label="下一周">→</button>
        </div>
      </div>
      <div className="calendar-progress" aria-hidden="true"><i style={{ width: `${((active + 1) / items.length) * 100}%` }} /></div>
      <div className="carousel-viewport" ref={viewportRef}>
        <div className="carousel-track compact-track">
          {items.map((item, index) => (
            <article className={active === index ? "active" : ""} data-week-card key={item.week} aria-current={active === index ? "true" : undefined}>
              <div className="week-card-top"><span>WEEK</span><b>{String(item.week).padStart(2, "0")}</b><i>{item.type}</i></div>
              <h3>{item.title}</h3>
              <p>{item.focus}</p>
              <small>{item.activity}</small>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
