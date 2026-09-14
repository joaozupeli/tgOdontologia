/**
 * ============================================================
 * DADOS DA CLÍNICA — TG Odontologia Clínica Especializada
 * Demo personalizado a partir de odontoproto (molde intacto)
 * ============================================================
 */

export const clinic = {
  name: 'TG Odontologia Clínica Especializada',
  shortName: 'TG Odontologia',
  discipline: 'Odontologia',
  established: 2018,

  tagline: 'Orto, implantes e HOF no Village XV',
  shortDescription:
    'Clínica multi-especialidade no Boqueirão, Curitiba — ortodontia, implantes, HOF e clínica geral, com acolhimento de bairro no Centro Comercial Village XV.',

  hero: {
    kicker: 'Boqueirão · Curitiba',
    lines: ['Cuidado completo', 'para o seu'],
    lineAccent: 'sorriso.',
    lead:
      'Ortodontia, implantes, harmonização orofacial e clínica geral no Village XV. Ambiente acolhedor, familiar e perto de casa no Boqueirão.',
  },

  whatsapp: '5541996614546',
  whatsappDisplay: '(41) 99661-4546',
  whatsappDefaultMessage:
    'Olá! Gostaria de agendar uma avaliação na TG Odontologia Clínica Especializada.',

  phone: '(41) 99661-4546',
  phoneLandline: '(41) 3779-4546',
  email: 'contato@tgodontologia.com.br',

  address: {
    street: 'Rua Maestro Carlos Frank, 2250 — Loja 07',
    neighborhood: 'Boqueirão',
    city: 'Curitiba',
    state: 'PR',
    zip: '81750-400',
    full: 'Rua Maestro Carlos Frank, 2250 — Loja 07, Centro Comercial Village XV, Boqueirão, Curitiba — PR, 81750-400',
  },

  hours: [
    { days: 'Segunda a sexta', time: '08:00 — 18:00' },
    { days: 'Sábado', time: 'Sob agendamento' },
    { days: 'Domingo', time: 'Fechado' },
  ],

  social: {
    instagram: 'https://www.instagram.com/tgodontologiaesp/',
    facebook: null,
    youtube: null,
  },

  stats: [
    { value: 5.0, suffix: '', label: 'Avaliação DentMap' },
    { value: 222, suffix: '+', label: 'Opiniões no Doctoralia' },
    { value: 4, suffix: '', label: 'Frentes de cuidado' },
    { value: 1, suffix: '', label: 'Canal direto no WhatsApp' },
  ],

  manifesto:
    'Odontologia de bairro com critério clínico: ortodontia, implantes, HOF e clínica geral no mesmo endereço — acolhedora, familiar e transparente em cada etapa.',

  principles: [
    {
      title: 'Acolhimento de bairro',
      text: 'Atendimento próximo, sem pressa e com linguagem simples — ideal para a família no Boqueirão.',
    },
    {
      title: 'Multi-especialidade',
      text: 'Ortodontia, implantes, HOF e clínica geral no Village XV. Menos deslocamento, mais continuidade.',
    },
    {
      title: 'Plano transparente',
      text: 'Cada etapa com escopo e valor claros antes de começar. Sem surpresas na conta.',
    },
    {
      title: 'WhatsApp sempre perto',
      text: 'Dúvidas, agendamentos e retornos com resposta humana, no canal que você já usa.',
    },
  ],
}

export const services = [
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    description: 'Alinhamento com planejamento claro, no ritmo da sua rotina.',
    detail:
      'Aparelho ou alinhadores conforme o caso. Você vê o caminho antes de começar — com acompanhamento próximo da Dra. Tayla.',
    topics: ['Alinhadores', 'Aparelho fixo', 'Planejamento'],
    icon: 'braces',
  },
  {
    id: 'implantes',
    title: 'Implantodontia',
    description: 'Reabilitação guiada, do planejamento à coroa definitiva.',
    detail:
      'Planejamento cuidadoso, prótese provisória quando o caso permite e acompanhamento no pós-operatório.',
    topics: ['Cirurgia', 'Prótese sobre implante', 'Reabilitação'],
    icon: 'implant',
  },
  {
    id: 'hof',
    title: 'Harmonização orofacial (HOF)',
    description: 'Protocolos faciais com critério clínico e resultado natural.',
    detail:
      'Avaliação facial integrada à odontologia. Indicação clara do que faz sentido para o seu caso — sem exagero.',
    topics: ['Avaliação facial', 'Protocolos', 'Acompanhamento'],
    icon: 'sparkle',
  },
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    description: 'Avaliação completa, prevenção e o reparo do que já deu problema.',
    detail:
      'Consulta cuidadosa de entrada, exame clínico e plano preventivo. Você sai com o mapa da sua boca e a ordem ideal de tratamento.',
    topics: ['Avaliação', 'Prevenção', 'Restaurações', 'Limpeza'],
    icon: 'tooth',
  },
  {
    id: 'proteses',
    title: 'Próteses',
    description: 'Coroas, pontes e próteses pensadas para função e estética.',
    detail:
      'Materiais e encaixe pensados para mastigar bem e ficar natural. Ajustes com acompanhamento próximo.',
    topics: ['Coroas', 'Pontes', 'Prótese removível'],
    icon: 'smile',
  },
  {
    id: 'clareamento',
    title: 'Clareamento',
    description: 'Protocolo dosado para clarear com conforto e previsibilidade.',
    detail:
      'Medimos a cor inicial, cuidamos da sensibilidade e ajustamos a concentração por sessão.',
    topics: ['Consultório', 'Caseiro', 'Manutenção'],
    icon: 'sparkle',
  },
]

export const ticker = [
  'Boqueirão · Curitiba',
  'Ortodontia',
  'Implantes',
  'HOF',
  'Clínica geral',
  'Village XV',
  'WhatsApp direto',
]

export const team = [
  {
    id: 'tayla-granemann',
    name: 'Dra. Tayla Granemann Jede',
    role: 'Cirurgiã-dentista · RT',
    tag: 'Responsável técnica',
    category: 'clinical',
    photo: null,
    bio: 'Responsável técnica da TG Odontologia Clínica Especializada no Boqueirão. Condução clínica em ortodontia, implantes, HOF e clínica geral, com atendimento acolhedor de bairro.',
    formation: 'CRO-PR 25924 · Odontologia',
    specialties: ['Ortodontia', 'Implantodontia', 'HOF', 'Clínica Geral'],
    funFact: 'Gosta de explicar o plano com calma — o paciente sai sabendo o porquê de cada etapa.',
    showWhatsApp: true,
  },
  {
    id: 'recepcao',
    name: 'Recepção',
    role: 'Atendimento',
    tag: 'Primeiro contato',
    category: 'admin',
    photo: null,
    bio: 'Organiza a agenda e responde o WhatsApp com o mesmo tom acolhedor da clínica no Village XV.',
    formation: 'Atendimento ao paciente',
    specialties: ['Agendamento', 'Acolhimento'],
    funFact: 'Quase sempre responde antes de você sair de casa.',
    showWhatsApp: true,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Paciente Boqueirão',
    rating: 5,
    text: 'Ambiente acolhedor e atendimento atencioso. Clínica bem localizada no Village XV — ideal para a família.',
    treatment: 'Avaliação',
    year: '2025',
  },
  {
    id: 2,
    name: 'Paciente Curitiba',
    rating: 5,
    text: 'Fiz o planejamento de ortodontia com clareza de prazo e valor. Recomendo pela atenção da Dra. Tayla.',
    treatment: 'Ortodontia',
    year: '2025',
  },
  {
    id: 3,
    name: 'Paciente Boqueirão',
    rating: 5,
    text: 'Clínica limpa, equipe atenciosa e WhatsApp que realmente responde. Nota alta no DentMap com razão.',
    treatment: 'Clínica geral',
    year: '2024',
  },
]
