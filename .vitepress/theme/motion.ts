import { animate } from 'motion'

// Motion only where it explains a change: the page swapped, or a screenshot grew. Nothing on scroll.
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches
const OPTS = { duration: 0.18, ease: 'easeOut' } as const

export function installZoom() {
  document.addEventListener('click', (e) => {
    const img = (e.target as Element).closest?.('.vp-doc img.zoomable')
    if (img) zoom(img as HTMLImageElement)
  })
}

/** After every page render. First load is already painted by SSR, so it doesn't fade. */
export function enterPage(firstLoad: boolean) {
  const doc = document.querySelector<HTMLElement>('.vp-doc')
  if (!doc) return

  for (const img of doc.querySelectorAll('img')) {
    // Only when the zoomed view (natural size, capped by the overlay's 92vw x 92vh) is clearly bigger than the inline one
    const mark = () => {
      const zoomed = Math.min(img.naturalWidth, innerWidth * 0.92, (innerHeight * 0.92 * img.naturalWidth) / img.naturalHeight)
      img.classList.toggle('zoomable', !img.closest('a') && zoomed > img.clientWidth * 1.15)
    }
    img.complete ? mark() : img.addEventListener('load', mark, { once: true })
  }

  if (!firstLoad && !reduced()) animate(doc, { opacity: [0, 1] }, OPTS)
}

function zoom(img: HTMLImageElement) {
  const overlay = document.createElement('div')
  overlay.className = 'img-zoom'
  const big = img.cloneNode() as HTMLImageElement
  big.classList.remove('zoomable')
  overlay.append(big)
  document.body.append(overlay)

  // FLIP: start the large copy exactly over the thumbnail, then let it grow into place.
  const offset = () => {
    const from = img.getBoundingClientRect()
    const to = big.getBoundingClientRect()
    return {
      x: from.x + from.width / 2 - (to.x + to.width / 2),
      y: from.y + from.height / 2 - (to.y + to.height / 2),
      scale: from.width / to.width,
    }
  }
  const opts = { ...OPTS, duration: reduced() ? 0 : 0.22 }
  const start = offset()
  img.style.visibility = 'hidden'
  animate(overlay, { opacity: [0, 1] }, opts)
  animate(big, { x: [start.x, 0], y: [start.y, 0], scale: [start.scale, 1] }, opts)

  const close = async () => {
    removeEventListener('keydown', onKey)
    await Promise.all([animate(overlay, { opacity: 0 }, opts), animate(big, offset(), opts)])
    img.style.visibility = ''
    overlay.remove()
  }
  const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
  overlay.addEventListener('click', close, { once: true })
  addEventListener('keydown', onKey)
}
