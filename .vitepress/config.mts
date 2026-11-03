import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type DefaultTheme } from 'vitepress'

const srcDir = path.resolve(import.meta.dirname, '..')
const LANGS = ['en', 'ko', 'zh'] as const

// "menno/faq.md" -> "menno/faq/index.md": every page URL ends with "/" (same URLs as the old Jekyll site)
const rewrite = (f: string) => (f.endsWith('index.md') ? f : f.replace(/\.md$/, '/index.md'))

function walk(dir = ''): string[] {
  return fs.readdirSync(path.join(srcDir, dir), { withFileTypes: true }).flatMap((e) => {
    const rel = dir ? `${dir}/${e.name}` : e.name
    if (e.isDirectory()) return e.name.startsWith('.') || e.name === 'node_modules' ? [] : walk(rel)
    return rel.endsWith('.md') && rel !== 'README.md' ? [rel] : []
  })
}

function frontmatter(file: string): Record<string, string> {
  const fm = fs.readFileSync(path.join(srcDir, file), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
  return Object.fromEntries([...fm.matchAll(/^(\w+):[ \t]*(.*?)\s*$/gm)].map((m) => [m[1], m[2]]))
}

// Sidebar tree from the folder structure: a page's parent is the page one URL segment up. Order: nav_order, then title.
type Node = DefaultTheme.SidebarItem & { order: number; children: Node[]; desc?: string }
function sidebar(lang: string): DefaultTheme.SidebarItem[] {
  const home = lang ? `/${lang}/` : '/'
  const nodes: Node[] = walk()
    .filter((f) => (lang ? f.startsWith(`${lang}/`) : !LANGS.some((l) => f.startsWith(`${l}/`))))
    .map((f) => {
      const { title, nav_order, description } = frontmatter(f)
      const link = '/' + rewrite(f).replace(/index\.md$/, '')
      // desc: one-line summary shown next to each section on the home index
      return { text: title, link, order: Number(nav_order ?? 99), children: [], ...(description && { desc: description }) }
    })
  const byLink = new Map(nodes.map((n) => [n.link, n]))
  const roots: Node[] = []
  for (const n of nodes) {
    if (n.link === home) continue
    const parent = byLink.get(n.link!.replace(/[^/]+\/$/, ''))
    ;(parent && parent.link !== home ? parent.children : roots).push(n)
  }
  const build = (list: Node[], depth: number): DefaultTheme.SidebarItem[] =>
    list
      .sort((a, b) => a.order - b.order || a.text!.localeCompare(b.text!))
      .map(({ order, children, ...item }) =>
        children.length ? { ...item, items: build(children, depth + 1), collapsed: depth > 0 ? true : undefined } : item
      )
  return build(roots, 0)
}

function locale(lang: string, ui: DefaultTheme.Config = {}): DefaultTheme.Config {
  const items = sidebar(lang)
  return {
    ...ui,
    sidebar: items,
    nav: items.map((i) => ({
      text: i.text!.replace(/^[^\p{L}\p{N}]+/u, ''),
      link: i.link!,
      activeMatch: `^${i.link}`,
    })),
  }
}

// VitePress's default slugify applies NFKD, which splits Japanese dakuten and Korean Hangul and breaks "#見出し" links.
const slugify = (s: string) =>
  s
    .normalize('NFC')
    .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()

export default defineConfig({
  title: 'M. Document',
  base: '/MDocument/', // GitHub Pages のリポジトリ名に合わせる
  srcExclude: ['README.md'],
  rewrites: rewrite,
  markdown: { anchor: { slugify }, headers: { slugify } },
  appearance: 'dark', // ダークが既定。切替ボタンは残す
  head: [['meta', { name: 'theme-color', content: '#101012' }]],

  themeConfig: {
    socialLinks: [{ icon: 'x', link: 'https://x.com/_emudotto' }],
    footer: { copyright: 'Copyright © 2025 M.' },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { translations: { button: { buttonText: '検索' }, modal: { noResultsText: '見つかりませんでした', footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' } } } },
          ko: { translations: { button: { buttonText: '검색' }, modal: { noResultsText: '결과가 없습니다', footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' } } } },
          zh: { translations: { button: { buttonText: '搜索' }, modal: { noResultsText: '没有找到结果', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } },
        },
      },
    },
  },

  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      description: 'M. Avatar シリーズのドキュメント',
      themeConfig: locale('', {
        outline: { label: '目次' },
        docFooter: { prev: '前のページ', next: '次のページ' },
        darkModeSwitchLabel: '外観',
        lightModeSwitchTitle: 'ライトモードに切り替え',
        darkModeSwitchTitle: 'ダークモードに切り替え',
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップへ戻る',
        langMenuLabel: '言語',
        skipToContentLabel: '本文へスキップ',
        notFound: { title: 'ページが見つかりません', quote: 'URL が変わったか、ページが移動した可能性があります。', linkText: 'ホームへ戻る' },
      }),
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Documentation for the M. Avatar series',
      themeConfig: locale('en'),
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko/',
      description: 'M. Avatar 시리즈 문서',
      themeConfig: locale('ko', {
        outline: { label: '목차' },
        docFooter: { prev: '이전 페이지', next: '다음 페이지' },
        darkModeSwitchLabel: '테마',
        sidebarMenuLabel: '메뉴',
        returnToTopLabel: '맨 위로',
        langMenuLabel: '언어',
        skipToContentLabel: '본문으로 건너뛰기',
        notFound: { title: '페이지를 찾을 수 없습니다', quote: 'URL이 바뀌었거나 페이지가 이동했을 수 있습니다.', linkText: '홈으로' },
      }),
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      description: 'M. Avatar 系列文档',
      themeConfig: locale('zh', {
        outline: { label: '目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '语言',
        skipToContentLabel: '跳到正文',
        notFound: { title: '页面未找到', quote: '网址可能已更改，或页面已被移动。', linkText: '返回首页' },
      }),
    },
  },
})
