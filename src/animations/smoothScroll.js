/**
 * Helpers em cima da instância do Lenis criada no App.vue.
 * A init fica no App.vue (duration + easing), igual ao setup que você passou.
 */

let lenis = null

export function setLenis(instance) {
  lenis = instance
}

export function getLenis() {
  return lenis
}

/** Trava a rolagem (menu mobile e modal abertos). */
export function lockScroll() {
  if (lenis) lenis.stop()
  else document.body.style.overflow = 'hidden'
}

export function unlockScroll() {
  if (lenis) lenis.start()
  else document.body.style.overflow = ''
}

/** Vai ao topo sem animação — usado na troca de página. */
export function jumpToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}

/**
 * Posição do elemento na página somando offsetTop.
 *
 * Não dá para usar getBoundingClientRect: os reveals deixam translateY
 * pendurado e a âncora aterrissaria fora do lugar.
 */
function restingTop(el) {
  let top = 0
  let node = el
  while (node) {
    top += node.offsetTop
    node = node.offsetParent
  }
  return top
}

function headerGap() {
  const h = getComputedStyle(document.documentElement).getPropertyValue('--header-h')
  return (Number.parseFloat(h) || 76) + 32
}

/** Rola até um elemento, parando logo abaixo do cabeçalho fixo. */
export function scrollToTarget(target, options = {}) {
  const { immediate = false } = options
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return

  const top = Math.max(0, restingTop(el) - headerGap())
  if (lenis) {
    lenis.scrollTo(top, {
      duration: immediate ? 0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate,
      force: true,
    })
  } else {
    window.scrollTo({ top, behavior: immediate ? 'auto' : 'smooth' })
  }
}
