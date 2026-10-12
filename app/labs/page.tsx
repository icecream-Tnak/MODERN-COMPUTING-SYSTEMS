import type { Metadata } from "next";
import { labs } from "../course-data";
import { courseAssetHref, courseHref } from "../site-paths";

export const metadata: Metadata = { title: "实验课程" };

function ResourceLink({
  url,
  label,
  pending,
  download = false,
}: {
  url?: string;
  label: string;
  pending: string;
  download?: boolean;
}) {
  const href = courseAssetHref(url);

  if (!href) {
    return <span>{pending}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download || undefined}
    >
      {label} ↗
    </a>
  );
}

export default function LabsPage() {
  return (
    <main id="main-content">
      <section className="page-hero compact-page-hero labs-page-hero">
        <div className="site-width page-hero-grid">
          <div>
            <p className="eyebrow">HANDS-ON LABS</p>
            <h1>实验课程</h1>
            <p>通过实验理解课程知识，完成操作、观察与分析。</p>
          </div>
          <div className="page-hero-stat">
            <strong>{labs.length}</strong>
            <span>实验项目</span>
            <small>模拟、测量与分析</small>
          </div>
        </div>
      </section>

      <section className="page-section compact-page-section site-width">
        <div className="section-heading split-heading compact-heading">
          <div>
            <p className="section-kicker">LAB ROADMAP</p>
            <h2>实验项目</h2>
          </div>
          <p>展开项目，查看实验工具、学习资料与报告模板。</p>
        </div>

        <div className="lab-list">
          {labs.map((lab) => (
            <details key={lab.no}>
              <summary>
                <span>LAB {lab.no}</span>
                <strong>{lab.title}</strong>
                <small>
                  {lab.weeks} · {lab.duration}
                </small>
                <i aria-hidden="true">+</i>
              </summary>

              <div className="lab-detail">
                <p>{lab.goal}</p>

                <dl>
                  <div>
                    <dt>实验工具</dt>
                    <dd>
                      {lab.tools}
                      <br />
                      <ResourceLink
                        url={lab.toolsUrl}
                        label="打开实验工具"
                        pending="工具链接待添加"
                      />
                    </dd>
                  </div>

                  <div>
                    <dt>提交内容</dt>
                    <dd>
                      {lab.deliverable}
                      <br />
                      <ResourceLink
                        url={lab.reportTemplate}
                        label="下载实验报告模板"
                        pending="报告模板待上传"
                        download
                      />
                    </dd>
                  </div>

                  <div>
                    <dt>理论内容</dt>
                    <dd>
                      <ResourceLink
                        url={lab.theoryPdf}
                        label="查看理论内容（PDF）"
                        pending="理论内容待上传"
                      />
                    </dd>
                  </div>

                  <div>
                    <dt>实验指导书</dt>
                    <dd>
                      <ResourceLink
                        url={lab.guidePdf}
                        label="查看实验指导书（PDF）"
                        pending="实验指导书待上传"
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            </details>
          ))}
        </div>

        <div className="compact-workflow" aria-label="实验方法">
          <strong>实验方法</strong>
          <span>01 明确任务</span>
          <span>02 操作与记录</span>
          <span>03 分析与总结</span>
        </div>
      </section>

      <section className="next-page site-width">
        <div>
          <p className="section-kicker">REFERENCE</p>
          <h2>需要技术文档？</h2>
          <p>学习资源页整理了 RISC-V、CUDA 和体系结构公开课程。</p>
        </div>
        <a
          className="button primary"
          href={courseHref("/resources")}
        >
          查找参考资料 →
        </a>
      </section>
    </main>
  );
}
