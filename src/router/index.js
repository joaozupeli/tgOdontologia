import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../pages/HomePage.vue')
const SobrePage = () => import('../pages/SobrePage.vue')
const ServicosPage = () => import('../pages/ServicosPage.vue')
const EquipePage = () => import('../pages/EquipePage.vue')
const ContatoPage = () => import('../pages/ContatoPage.vue')
const NotFoundPage = () => import('../pages/NotFoundPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage, meta: { title: 'Início' } },
    { path: '/sobre', name: 'sobre', component: SobrePage, meta: { title: 'A clínica' } },
    { path: '/servicos', name: 'servicos', component: ServicosPage, meta: { title: 'Serviços' } },
    { path: '/equipe', name: 'equipe', component: EquipePage, meta: { title: 'Equipe' } },
    { path: '/contato', name: 'contato', component: ContatoPage, meta: { title: 'Contato' } },
    {
      path: '/:pathMatch(.*)*',
      name: 'nao-encontrado',
      component: NotFoundPage,
      meta: { title: 'Página não encontrada' },
    },
  ],
  /**
   * O App.vue cuida da rolagem, não o router.
   *
   * Dois motivos: a transição entre páginas é `mode="out-in"`, então quando o
   * router rolaria o alvo do #hash ainda nem existe no DOM; e o scroll suave
   * é controlado pelo Lenis, que precisa ser chamado diretamente.
   */
  scrollBehavior() {
    return false
  },
})

router.afterEach((to) => {
  const base = 'TG Odontologia Clínica Especializada'
  document.title = to.meta.title ? `${to.meta.title} · ${base}` : base
})

export default router
