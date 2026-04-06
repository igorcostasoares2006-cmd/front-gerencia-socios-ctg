export const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    active: true,
    icon: 'grid',
  },
  {
    id: 'members',
    label: 'Socios',
    active: false,
    icon: 'users',
  },
]

export const stats = [
  {
    label: 'Total de Socios',
    value: '8',
    tone: 'primary',
    icon: 'users',
  },
  {
    label: 'Socios Ativos',
    value: '6',
    tone: 'success',
    icon: 'user-check',
  },
  {
    label: 'Socios Inativos',
    value: '1',
    tone: 'danger',
    icon: 'user-x',
  },
  {
    label: 'Pendentes',
    value: '1',
    tone: 'warning',
    icon: 'clock',
  },
]

export const categoryDistribution = [
  {
    name: 'Socio',
    total: '3 socios',
    percent: 42,
    tone: 'primary',
  },
  {
    name: 'Dancarino',
    total: '2 socios',
    percent: 27,
    tone: 'secondary',
  },
  {
    name: 'Socio/Dancarino',
    total: '3 socios',
    percent: 42,
    tone: 'accent',
  },
]

export const recentMembers = [
  {
    id: 1,
    name: 'Juliana Ferreira',
    email: 'juliana.ferreira@email.com',
    joinedAt: '29/02/2024',
    status: 'pendente',
  },
  {
    id: 2,
    name: 'Marina Costa Oliveira',
    email: 'marina.costa@email.com',
    joinedAt: '14/02/2024',
    status: 'ativo',
  },
]

export const userProfile = {
  name: 'Administrador',
  email: 'admin@ctg.com',
}

export const pageCopy = {
  brandTitle: 'CTG - Gestao de Socios',
  brandSubtitle: 'Painel Administrativo',
  pageTitle: 'Dashboard',
  pageSubtitle: 'Visao geral do sistema de gerenciamento',
  revenueTitle: 'Receita Mensal',
  revenueAmount: 'R$ 1000,00',
  revenueDescription: 'Proveniente de 6 socios ativos',
  distributionTitle: 'Distribuicao por Categoria',
  membersTitle: 'Ultimas Adesoes',
}