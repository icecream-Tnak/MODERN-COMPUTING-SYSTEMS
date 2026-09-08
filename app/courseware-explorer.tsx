"use client";

import { useEffect, useMemo, useState } from "react";

export type CoursewareItem = {
  no: string;
  title: string;
  summary: string;
  topic: string;
  file: string;
  available: boolean;
};

const STORAGE_KEY = "modern-computing-completed-chapters";

export default function CoursewareExplorer({ items }: { items: CoursewareItem[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("全部主题");
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const topics = useMemo(
    () => ["全部主题", ...Array.from(new Set(items.map((item) => item.topic)))],
    [items],
  );

  const filteredItems = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesTopic = topic === "全部主题" || item.topic === topic;
      const searchable = `${item.no} ${item.title} ${item.summary} ${item.topic}`.toLowerCase();
      return matchesTopic && (!keyword || searchable.includes(keyword));
    });
  }, [items, query, topic]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]") as string[];
        setCompleted(new Set(saved));
      } catch {
        setCompleted(new Set());
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function toggleCompleted(no: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(no)) next.delete(no);
      else next.add(no);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      return next;
    });
  }

  const progress = Math.round((completed.size / items.length) * 100);

  return (
    <>
      <div className="progress-panel">
        <div className="progress-copy">
          <span className="progress-icon" aria-hidden="true">✓</span>
          <div>
            <strong>我的学习进度</strong>
            <p>已完成 {completed.size} / {items.length} 个章节 · 记录仅保存在当前设备</p>
          </div>
        </div>
        <div className="progress-visual" aria-label={`课程学习进度 ${progress}%`}>
          <span>{progress}%</span>
          <div className="progress-track"><i style={{ width: `${progress}%` }} /></div>
        </div>
      </div>

      <div className="course-tools">
        <label className="search-field">
          <span aria-hidden="true">⌕</span>
          <span className="sr-only">搜索课程资料</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索章节、主题或关键词"
          />
        </label>
        <label className="topic-select">
          <span className="sr-only">按主题筛选</span>
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            {topics.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <span className="result-count">显示 {filteredItems.length} 个章节</span>
      </div>

      {filteredItems.length ? (
        <div className="course-grid" aria-live="polite">
          {filteredItems.map((item) => {
            const isCompleted = completed.has(item.no);
            return (
              <article
                className={`course-card ${item.no === "01" ? "featured" : ""} ${item.no === "03" ? "orange" : ""} ${isCompleted ? "completed" : ""}`}
                key={item.no}
              >
                <div className="card-topline">
                  <span className="chapter-number">{item.no}</span>
                  <span className="topic">{item.topic}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <button
                  className="complete-button"
                  type="button"
                  aria-pressed={isCompleted}
                  onClick={() => toggleCompleted(item.no)}
                >
                  <span aria-hidden="true">{isCompleted ? "✓" : "○"}</span>
                  {isCompleted ? "已完成学习" : "标记为已学"}
                </button>
                <div className="card-footer">
                  <span className="file-type">PPT</span>
                  {item.available ? (
                    <a href={`./${item.file}`} download>
                      下载 PPT <span aria-hidden="true">↓</span>
                    </a>
                  ) : (
                    <span className="pending" aria-label={`${item.title}课件待上传`}>
                      待上传
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-result" role="status">
          <strong>没有找到匹配的课程资料</strong>
          <p>请尝试更换关键词或选择“全部主题”。</p>
          <button type="button" onClick={() => { setQuery(""); setTopic("全部主题"); }}>
            清除筛选
          </button>
        </div>
      )}
    </>
  );
}
