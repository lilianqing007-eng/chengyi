import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "选择语言",
  description: "进入橙益食品中文或英文网站。",
};

export default function Home() {
  return (
    <main className="language-entry">
      <h1>橙益 CHENGYI</h1>
      <p>正在进入橙益中文网站…</p>
      <nav aria-label="语言选择">
        <a href="/zh/">中文</a>
        <a href="/en/">English</a>
      </nav>
      <script
        dangerouslySetInnerHTML={{ __html: 'window.location.replace("/zh/");' }}
      />
    </main>
  );
}
