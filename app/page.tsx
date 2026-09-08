import { weekPlans } from "./course-data";
import { courseHref, courseSectionHref } from "./site-paths";
import TeachingCalendar from "./teaching-calendar";

const announcements = [
  { date: "09.09", label: "课程开始", text: "第一周：课程导论、计算系统演进与冯·诺依曼架构。" },
];

const learningPaths = [
  { no: "01", label: "理论学习", title: "理解系统结构", text: "从 ISA、处理器与存储层次建立架构思维。", href: "/courseware", action: "查看课程资料" },
  { no: "02", label: "动手验证", title: "测量真实性能", text: "通过 RISC-V、Cache 与 CUDA 实验验证设计机制。", href: "/labs", action: "进入实验课程" },
  { no: "03", label: "扩展探索", title: "连接技术前沿", text: "使用公开课、官方规范和学术资源继续深入。", href: "/resources", action: "浏览学习资源" },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero compact-hero">
        <div className="site-width hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">2026–2027 学年 · 秋季学期</p>
            <h1>现代计算系统<br /><span>结构与算力技术</span></h1>
            <p className="hero-intro">从一条指令的执行出发，理解处理器、存储、GPU 与智能算力系统。</p>
            <div className="hero-actions">
              <a className="button primary" href={courseSectionHref("calendar")}>查看教学日历 <span>↓</span></a>
              <a className="button ghost" href={courseHref("/courseware")}>下载课程资料</a>
            </div>
            <div className="course-meta" aria-label="课程基本信息">
              <span><b>16</b> 周教学</span><span><b>10</b> 个主题</span><span><b>6</b> 个实验</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="现代计算系统架构示意图">
            <div className="hero-code">MCS · 2026</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="./hero-compute-architecture.jpg" width="1568" height="1003" decoding="async" fetchPriority="high" alt="处理器、互连与加速器组成的现代计算系统架构插图" />
            <div className="hero-caption"><span>ARCHITECTURE</span><span>COMPUTE</span><span>SYSTEMS</span></div>
          </div>
        </div>
      </section>

      <section className="compact-announcements" aria-label="课程公告">
        <div className="site-width compact-announcement-grid">
          <strong>课程公告</strong>
          {announcements.map((item) => (
            <article key={item.date + item.label}><time>{item.date}</time><p><b>{item.label}</b> · {item.text}</p></article>
          ))}
        </div>
      </section>

      <section className="calendar-section site-width" id="calendar">
        <div className="section-heading split-heading compact-heading">
          <div><p className="section-kicker">COURSE CALENDAR</p><h2>16 周教学日历</h2></div>
          <p>理论、实验和研讨按周衔接。可自动轮播，也可直接选择周次查看。</p>
        </div>
        <TeachingCalendar items={weekPlans} />
      </section>

      <section className="learning-path-section">
        <div className="site-width">
          <div className="section-heading split-heading compact-heading">
            <div><p className="section-kicker">LEARNING PATH</p><h2>一条清晰的学习路径</h2></div>
            <p>相近功能已经合并为理论、实验和扩展三个入口，减少重复查找。</p>
          </div>
          <div className="learning-path-grid">
            {learningPaths.map((item) => (
              <a href={courseHref(item.href)} key={item.no}>
                <div><span>{item.no}</span><i>{item.label}</i></div>
                <h3>{item.title}</h3><p>{item.text}</p><b>{item.action} →</b>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
