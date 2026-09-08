import type { Metadata } from "next";
import { labs } from "../course-data";
import { courseHref } from "../site-paths";

export const metadata: Metadata = { title: "实验课程" };

export default function LabsPage() {
  return (
    <main id="main-content">
      <section className="page-hero compact-page-hero labs-page-hero">
        <div className="site-width page-hero-grid">
          <div><p className="eyebrow">HANDS-ON LABS</p><h1>实验课程</h1><p>六个实验把体系结构知识转化为可测量、可复现的工程证据。</p></div>
          <div className="page-hero-stat"><strong>6</strong><span>实验项目</span><small>16 学时 · 模拟、测量与优化</small></div>
        </div>
      </section>

      <section className="page-section compact-page-section site-width">
        <div className="section-heading split-heading compact-heading"><div><p className="section-kicker">LAB ROADMAP</p><h2>实验项目</h2></div><p>点击项目展开实验目标、工具与提交要求。</p></div>
        <div className="lab-list">
          {labs.map((lab) => (
            <details key={lab.no}>
              <summary>
                <span>LAB {lab.no}</span><strong>{lab.title}</strong><small>{lab.weeks} · {lab.duration}</small><i aria-hidden="true">+</i>
              </summary>
              <div className="lab-detail">
                <p>{lab.goal}</p>
                <dl><div><dt>实验工具</dt><dd>{lab.tools}</dd></div><div><dt>提交内容</dt><dd>{lab.deliverable}</dd></div></dl>
                <span>实验指导书 · 待上传</span>
              </div>
            </details>
          ))}
        </div>
        <div className="compact-workflow" aria-label="实验方法">
          <strong>实验方法</strong><span>01 建立假设</span><span>02 获取数据</span><span>03 解释机制</span>
        </div>
      </section>

      <section className="next-page site-width"><div><p className="section-kicker">REFERENCE</p><h2>需要技术文档？</h2><p>学习资源页整理了 RISC-V、CUDA 和体系结构公开课程。</p></div><a className="button primary" href={courseHref("/resources")}>查找参考资料 →</a></section>
    </main>
  );
}
