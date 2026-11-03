<script setup lang="ts">
import { useData, withBase, type DefaultTheme } from 'vitepress'
import { computed } from 'vue'

type Section = DefaultTheme.SidebarItem & { desc?: string }
type Entry = { name: string; desc: string; text?: string; link?: string }

const { site, theme, frontmatter } = useData()
// Same tree as the sidebar, so the index can never drift from the actual pages.
const sections = computed(() => theme.value.sidebar as Section[])
const upcoming = computed(() => (frontmatter.value.upcoming ?? []) as Entry[])
const support = computed(() => (frontmatter.value.support ?? []) as Entry[])
</script>

<template>
  <div class="home-index">
    <header class="intro">
      <h1>{{ site.title }}</h1>
      <p>{{ frontmatter.description }}</p>
    </header>

    <section>
      <h2 class="label">{{ frontmatter.labels.docs }}</h2>
      <div class="rows">
        <div v-for="s in sections" :key="s.link" class="row">
          <div class="head">
            <a class="name" :href="withBase(s.link!)">{{ s.text }}</a>
            <p v-if="s.desc" class="desc">{{ s.desc }}</p>
          </div>
          <ul class="pages">
            <li v-for="p in s.items" :key="p.link">
              <a :href="withBase(p.link!)">{{ p.text }}</a>
              <ul v-if="p.items" class="sub">
                <li v-for="c in p.items" :key="c.link">
                  <a :href="withBase(c.link!)">{{ c.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div v-for="u in upcoming" :key="u.name" class="row">
          <div class="head">
            <span class="name is-muted">{{ u.name }}</span>
            <p class="desc">{{ u.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="label">{{ frontmatter.labels.support }}</h2>
      <div class="rows">
        <div v-for="c in support" :key="c.name" class="row">
          <div class="head">
            <span class="name">{{ c.name }}</span>
          </div>
          <p class="contact">
            <a :href="c.link" target="_blank" rel="noreferrer">{{ c.text }}</a>
            <span>{{ c.desc }}</span>
          </p>
        </div>
      </div>
    </section>

    <p class="copyright">{{ theme.footer?.copyright }}</p>
  </div>
</template>

<style scoped>
/* Left edge lines up with the "M. Document" title in the nav bar. */
.home-index {
  max-width: calc(var(--vp-layout-max-width) - 64px);
  margin: 0 auto;
  padding: 48px 24px 64px;
}
.home-index > * {
  max-width: 960px;
}
@media (min-width: 768px) {
  .home-index {
    padding: 64px 32px 80px;
  }
}

.intro h1 {
  font-size: 28px;
  line-height: 36px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.intro p {
  max-width: 36em;
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

section {
  margin-top: 48px;
}
.label {
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}
.rows {
  border-bottom: 1px solid var(--vp-c-divider);
}

/* One grid for every row: name + description on the left, what's inside on the right. */
.row {
  display: grid;
  gap: 12px;
  padding: 20px 0;
  border-top: 1px solid var(--vp-c-divider);
}
@media (min-width: 768px) {
  .row {
    grid-template-columns: 240px 1fr;
    gap: 32px;
  }
}

.name {
  font-size: 15px;
  line-height: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.name.is-muted {
  color: var(--vp-c-text-2);
}
.desc {
  margin-top: 4px;
  font-size: 13px;
  line-height: 20px;
  color: var(--vp-c-text-3);
}

.pages {
  columns: 2 220px;
  column-gap: 32px;
}
.pages > li {
  break-inside: avoid;
}
/* Hierarchy by contrast: section name text-1 > pages text-2 > sub-pages and notes text-3 */
.pages a,
.contact a {
  font-size: 14px;
  line-height: 28px;
  color: var(--vp-c-text-2);
  transition: color 0.12s;
}
.sub {
  margin: 0 0 4px 1px;
  padding-left: 12px;
  border-left: 1px solid var(--vp-c-divider);
}
.sub a {
  font-size: 13px;
  line-height: 24px;
  color: var(--vp-c-text-3);
}
.pages a:hover,
.contact a:hover,
a.name:hover {
  color: var(--vp-c-brand-1);
}

.contact {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0 16px;
}
.contact span {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.copyright {
  margin-top: 48px;
  font-size: 12px;
  line-height: 16px;
  color: var(--vp-c-text-3);
}
</style>
