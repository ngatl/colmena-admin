export interface Layout {
  headerNav: any[]
  footerLeft: string
  footerRight: string
  sidebarNav: any[]
}

export interface LayoutState {
  readonly layout: Layout
}
