"use client";

import { useEffect, useRef, useState } from "react";
import type { WeekPlan } from "../course-data";

export default function ScheduleCarousel({ items }: { items: WeekPlan[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  function moveTo(index: number) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = viewport.querySelectorAll<HTMLElement>("[data-week-card]");
    const target = cards[index];
    if (!target) return;
    viewport.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setActive(index);
  }

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => moveTo((active + 1) % items.length), 3600);
    return () => window.clearInterval(timer);
  }, [active, items.length, paused]);

  return (
    <div className="schedule-carousel" aria-roledescription="轮播" aria-label="第 1 至 16 周教学安排">
      <div className="carousel-head">
        <p><span>正在展示</span> 第 {String(active + 1).padStart(2, "0")} 周 / 共 16 周</p>
        <div className="carousel-controls">
          <button type="button" onClick={() => moveTo((active - 1 + items.length) % items.length)} aria-label="上一周">←</button>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>{paused ? "继续轮播" : "暂停轮播"}</button>
          <button type="button" onClick={() => moveTo((active + 1) % items.length)} aria-label="下一周">→</button>
        </div>
      </div>
      <div className="carousel-viewport" ref={viewportRef}>
        <div className="carousel-track">
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
      <div className="carousel-dots" aria-label="选择教学周">
        {items.map((item, index) => (
          <button type="button" className={active === index ? "active" : ""} onClick={() => moveTo(index)} aria-label={`查看第 ${item.week} 周`} key={item.week} />
        ))}
      </div>
    </div>
  );
}
