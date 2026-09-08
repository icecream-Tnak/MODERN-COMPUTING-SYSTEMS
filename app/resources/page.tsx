import type { Metadata } from "next";
import { usefulLinks } from "../course-data";

export const metadata: Metadata = { title: "学习资源" };

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <section className="page-hero compact-page-hero resources-page-hero">
        <div className="site-width page-hero-grid">
          <div><p className="eyebrow">USEFUL LINKS</p><h1>学习资源</h1><p>从中文课程资料到国际公开课、指令集规范和 GPU 官方文档，为不同学习阶段提供可靠入口。</p></div>
          <div className="page-hero-stat"><strong>8</strong><span>精选入口</span><small>课程 · 文档 · 校内学术资源</small></div>
        </div>
      </section>

      <section className="page-section compact-page-section site-width">
        <div className="section-heading split-heading compact-heading"><div><p className="section-kicker">CURATED RESOURCES</p><h2>推荐链接</h2></div><p>优先收录高校课程与官方技术文档，第三方共享资料请自行核对版本。</p></div>
        <div className="resource-grid">
          {usefulLinks.map((item, index) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
              <div className="resource-card-top"><span>{String(index + 1).padStart(2, "0")}</span><i>{item.tag}</i></div>
              <h2>{item.title}</h2>
              <small>{item.source}</small>
              <p>{item.description}</p>
              <b>访问网站 <span aria-hidden="true">↗</span></b>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
