# M. Document

M. Avatar シリーズのドキュメントサイト（Jekyll + [Just the Docs](https://just-the-docs.com/) + [jekyll-polyglot](https://github.com/untra/polyglot)）。

公開先: https://mono-meruo.github.io/MDocument/

## 構成

| パス | 内容 |
|------|------|
| `index.md`, `menno/`, `avatar-setting/`, `licenses/` | 日本語（デフォルト言語）のページ |
| `en/`, `ko/`, `zh/` | 各言語の翻訳。日本語と同じパスに置く（例: `menno/faq.md` → `en/menno/faq.md`） |
| `assets/images/` | 画像（全言語共通） |
| `_includes/header_custom.html` | 言語切替 |
| `_sass/custom/custom.scss` | 追加スタイル |
| `_plugins/html-lang.rb` | `<html lang>` を表示言語に合わせる |

翻訳ページの front matter は日本語版と同じ `permalink` に `lang: en` などを付ける。翻訳が無いページは日本語版が表示される。

ナビゲーションは `parent` / `grand_parent` に**親ページの title をそのまま**書いて組み立てる（言語ごとに親の title も翻訳後のものを使う）。

## リンク・画像の書き方

```md
[Menno]({{ site.baseurl }}/menno/)
![UI]({{ site.baseurl }}/assets/images/mas_ui.png)
```

- `../` などの相対パスや、`{{ site.baseurl }}` なしの `/menno/` は使わない（URL が `/MDocument/` 配下なので壊れる）。
- 言語接頭辞（`/en/` など）は Polyglot が自動で付けるので書かない。

## ローカルで確認

```bash
bundle install
bundle exec jekyll serve
```

http://localhost:4000/MDocument/ で確認できる。

## デプロイ

`main` に push すると GitHub Actions（`.github/workflows/pages.yml`）がビルドして GitHub Pages に公開する。PR ではビルドの確認のみ行う。
