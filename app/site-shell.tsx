import { courseHref, courseSectionHref } from "./site-paths";

const navItems = [
  { href: "/", label: "课程主页" },
  { href: "#calendar", label: "教学日历" },
  { href: "/courseware", label: "课程资料" },
  { href: "/labs", label: "实验课程" },
  { href: "/questions", label: "思考题" },
  { href: "/resources", label: "学习资源" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">跳转到主要内容</a>
      <div className="university-bar">
        <div className="site-width university-inner">
          <a href="https://www.zust.edu.cn/" target="_blank" rel="noreferrer">浙江科技大学</a>
          <span>自动化与电气工程学院</span>
          <span className="university-en">ZHEJIANG UNIVERSITY OF SCIENCE AND TECHNOLOGY</span>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width header-inner">
          <a className="brand" href={courseHref("/")} aria-label="返回课程主页">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>
              <strong>现代计算系统结构与算力技术</strong>
              <small>MODERN COMPUTING SYSTEMS</small>
            </span>
          </a>
          <nav aria-label="课程主导航">
            {navItems.map((item) => <a href={item.href.startsWith("#") ? courseSectionHref(item.href.slice(1)) : courseHref(item.href)} key={item.href}>{item.label}</a>)}
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-grid">
        <div>
          <strong>现代计算系统结构与算力技术</strong>
          <p>从体系结构到智能算力，建立现代计算平台的整体认识。</p>
        </div>
        <div>
          <span>开课单位</span>
          <p>浙江科技大学 · 自动化与电气工程学院</p>
        </div>
        <div>
          <span>课程导航</span>
          <p><a href={courseSectionHref("calendar")}>教学日历</a> · <a href={courseHref("/labs")}>实验课程</a> · <a href={courseHref("/questions")}>思考题</a> · <a href={courseHref("/resources")}>学习资源</a></p>
        </div>
      </div>
      <div className="site-width footer-bottom">课程资料仅供教学使用 · 2026</div>
    </footer>
  );
}
