# M. Document

M. Avatar シリーズのドキュメントサイト（[VitePress](https://vitepress.dev/) + [Motion](https://motion.dev/)）。

公開先: https://mono-meruo.github.io/MDocument/

## ローカルで見る

Node.js 22 以上が必要です。

```bash
npm install
npm run dev
```

http://localhost:5173/MDocument/ が開きます。Markdown を保存するとすぐ反映されます。

公開版と同じものを確認したいときは `npm run build` のあと `npm run preview`（http://localhost:4173/MDocument/）。

## 構成

| パス | 内容 |
|------|------|
| `index.md`, `menno/`, `avatar-setting/`, `licenses/` | 日本語のページ |
| `en/`, `ko/`, `zh/` | 各言語の翻訳。日本語と同じパスに置く（例: `menno/faq.md` → `en/menno/faq.md`） |
| `assets/images/` | 画像（全言語共通） |
| `.vitepress/config.mts` | サイト設定。サイドバーと上部メニューはフォルダ構成から自動生成 |
| `.vitepress/theme/` | デザインルール（`style.css` 冒頭に余白・文字サイズ・色の規則）、トップの索引（`HomeIndex.vue`）、画像ズームとページ切替（`motion.ts`） |

## ページの書き方

```md
---
title: 導入方法
nav_order: 1
---

# 導入方法

[Menno のトップ](/menno/) / [FAQ](/menno/faq/)

![UI](/assets/images/mas_ui.png)
```

- `title` がサイドバーの表示名、`nav_order` が並び順（小さいほど上）。
- 親子関係はフォルダで決まる（`menno/mas-settings/face/` は `menno/mas-settings.md` の子）。
- リンクは `/` から書く。翻訳ページでは言語を付ける（`/en/menno/faq/`）。
- 翻訳がまだ無いページは、日本語ページを読み込むだけのページを置く（`en/avatar-setting/history/index.md` を参照）。
- リンク切れがあると `npm run build` が失敗するので、公開前に気づける。

## デプロイ

`main` に push すると GitHub Actions（`.github/workflows/pages.yml`）がビルドして GitHub Pages に公開します。PR ではビルドの確認のみ行います。
