import { Layout } from './layout.interfaces'

const year = new Date().getFullYear()
const colmena = `Running <a href="https://github.com/colmena/colmena" target="_blank">Colmena</a> &copy; ${year}`
const angular = `<a href="https://angular.io" target="_blank">Angular</a>`
const loopback = `<a href="https://loopback.io" target="_blank">LoopBack</a>`

export const layoutInitialState: Layout = {
  headerNav: [],
  footerLeft: `${colmena}`,
  footerRight: `Powered by ${loopback} and ${angular}`,
  sidebarNav: [],
}
