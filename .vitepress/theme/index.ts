import DefaultTheme from 'vitepress/theme'
import { useRoute, type Theme } from 'vitepress'
import { h, onMounted, watch } from 'vue'
import HomeIndex from './HomeIndex.vue'
import { enterPage, installZoom } from './motion'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeIndex', HomeIndex)
  },
  Layout: {
    setup() {
      const route = useRoute()
      onMounted(() => {
        installZoom()
        enterPage(true)
      })
      watch(() => route.path, () => enterPage(false), { flush: 'post' })
      return () => h(DefaultTheme.Layout)
    },
  },
} satisfies Theme
