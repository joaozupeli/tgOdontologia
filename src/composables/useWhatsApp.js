/**
 * Composable reutilizável para links WhatsApp (wa.me)
 * Uso: const { href, open } = useWhatsApp(phone, message)
 */
export function useWhatsApp(phoneNumber, message = '') {
  const digits = String(phoneNumber || '').replace(/\D/g, '')
  const encoded = message ? encodeURIComponent(message) : ''
  const href = encoded
    ? `https://wa.me/${digits}?text=${encoded}`
    : `https://wa.me/${digits}`

  function open() {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return { href, open, digits }
}
