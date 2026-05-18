import { socios } from '../data/mockData'

export function getSocios() {
  return socios
}

export function getSocioById(id) {
  return socios.find(s => s.id === Number(id)) ?? null
}
