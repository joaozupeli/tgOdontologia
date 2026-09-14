import { onMounted, onUnmounted } from 'vue'
import { gsap, scheduleRefresh, whenReady } from '../animations/motion'

/**
 * Cria as animações de um componente dentro de um gsap.context.
 *
 * Espera as fontes carregarem antes de medir qualquer coisa e desfaz
 * tudo (tweens + ScrollTriggers) quando o componente sai da tela.
 *
 * Uso:
 *   const rootRef = ref(null)
 *   useMotion(() => { revealUp('.algo') }, rootRef)
 */
export function useMotion(setup, scopeRef) {
  let ctx = null
  let disposed = false

  onMounted(async () => {
    await whenReady()
    if (disposed) return
    ctx = gsap.context(setup, scopeRef?.value || undefined)
    scheduleRefresh()
  })

  onUnmounted(() => {
    disposed = true
    ctx?.revert()
  })
}
