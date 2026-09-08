import type { Metadata } from "next";
import Link from "next/link";
import { weekPlans } from "../course-data";
import ScheduleCarousel from "./schedule-carousel";

export const metadata: Metadata = { title: "教学安排" };

export default function SchedulePage() {
  return (
    <main id="main-content">
      <section className="page-hero schedule-page-hero">
        <div className="site-width page-hero-grid">
          <div><p className="eyebrow">TEACHING SCHEDULE</p><h1>教学安排</h1><p>用 16 周建立从指令系统、处理器和存储层次，到 GPU、异构计算与智能算力的完整知识链。</p></div>
          <div className="page-hero-stat"><strong>16</strong><span>教学周</span><small>理论 · 实验 · 研讨 · 复习</small></div>
        </div>
      </section>

      <section className="page-section site-width">
        <div className="section-heading split-heading"><div><p className="section-kicker">WEEKLY PLAN</p><h2>第 1–16 周课程日历</h2></div><p>下方内容将自动横向轮播；也可使用左右按钮、周次圆点或触控滑动浏览。</p></div>
        <ScheduleCarousel items={weekPlans} />
      </section>

      <section className="page-section soft-section">
        <div className="site-width">
          <div className="section-heading split-heading"><div><p className="section-kicker">FULL SCHEDULE</p><h2>完整教学清单</h2></div><p>每一周都将理论知识与分析练习、实验或研讨任务相连接。</p></div>
          <div className="schedule-table" role="table" aria-label="16 周完整教学安排">
            <div className="schedule-row schedule-table-head" role="row"><span>周次</span><span>主题</span><span>核心内容</span><span>课堂活动</span></div>
            {weekPlans.map((item) => (
              <div className="schedule-row" role="row" key={item.week}>
                <span><b>第 {item.week} 周</b><i>{item.type}</i></span><strong>{item.title}</strong><p>{item.focus}</p><small>{item.activity}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="next-page site-width"><div><p className="section-kicker">LEARN BY DOING</p><h2>将课堂知识带进实验</h2><p>实验任务与教学周次对应，建议在学习理论内容后完成。</p></div><Link className="button primary" href="/labs">查看实验课程 →</Link></section>
    </main>
  );
}
