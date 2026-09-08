import type { Metadata } from "next";
import { questionTopics, thinkingQuestions } from "./questions-data";

export const metadata: Metadata = { title: "思考题" };

export default function QuestionsPage() {
  return (
    <main id="main-content">
      <section className="page-hero compact-page-hero questions-page-hero">
        <div className="site-width page-hero-grid">
          <div>
            <p className="eyebrow">THINKING QUESTIONS</p>
            <h1>思考题</h1>
            <p>围绕课程中的关键概念提出问题。建议先独立分析，再展开参考答案进行对照。</p>
          </div>
          <div className="page-hero-stat">
            <strong>{thinkingQuestions.length}</strong>
            <span>道思考题</span>
            <small>问题 · 提示 · 参考答案</small>
          </div>
        </div>
      </section>

      <section className="page-section compact-page-section site-width">
        <div className="section-heading split-heading compact-heading">
          <div><p className="section-kicker">COURSE REVIEW</p><h2>从问题检验理解</h2></div>
          <p>参考答案提供分析路径，不是唯一表述。课堂讨论时可结合具体系统、程序和实验数据进一步论证。</p>
        </div>

        <nav className="question-topic-nav" aria-label="思考题主题导航">
          {questionTopics.map((topic) => <a href={`#topic-${topic}`} key={topic}>{topic}</a>)}
        </nav>

        <div className="question-groups">
          {questionTopics.map((topic) => {
            const items = thinkingQuestions.filter((item) => item.topic === topic);
            return (
              <section className="question-group" id={`topic-${topic}`} key={topic}>
                <div className="question-group-heading">
                  <div><span>{String(questionTopics.indexOf(topic) + 1).padStart(2, "0")}</span><h2>{topic}</h2></div>
                  <small>{items.length} 道题目</small>
                </div>
                <div className="question-list">
                  {items.map((item) => (
                    <details key={item.id}>
                      <summary>
                        <span className="question-number">Q{item.id.slice(1)}</span>
                        <span className="question-summary-copy"><small>{item.week}</small><strong>{item.question}</strong></span>
                        <i aria-hidden="true">+</i>
                      </summary>
                      <div className="question-answer">
                        <div><span>思考提示</span><p>{item.hint}</p></div>
                        <div><span>参考答案</span><p>{item.answer}</p></div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
