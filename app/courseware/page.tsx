import type { Metadata } from "next";
import CoursewareExplorer from "../courseware-explorer";
import { courseware } from "../course-data";

export const metadata: Metadata = { title: "课程资料" };

export default function CoursewarePage() {
  return (
    <main id="main-content">
      <section className="page-hero compact-page-hero courseware-page-hero">
        <div className="site-width page-hero-grid">
          <div><p className="eyebrow">COURSEWARE</p><h1>课程资料</h1><p>按照章节检索课程 PPT，标记学习进度，并结合教学安排完成课前预习与课后复盘。</p></div>
          <div className="page-hero-stat"><strong>10</strong><span>主题模块</span><small>PPT 将按教学进度陆续开放</small></div>
        </div>
      </section>
      <section className="page-section compact-page-section site-width">
        <div className="section-heading split-heading compact-heading"><div><p className="section-kicker">LECTURE SLIDES</p><h2>PPT 课件与学习进度</h2></div><p>可按章节名称、主题和关键词检索；进度仅保存在当前浏览器。</p></div>
        <CoursewareExplorer items={courseware} />
      </section>
    </main>
  );
}
