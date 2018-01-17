import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'content'

const moduleConfig = {
  name: 'Content',
  icon: 'icon-layers',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [{ name: 'Content', icon: 'icon-layers', url: '/content/' }],
  sidebarLinks: [
    { weight: 5, name: 'Content', icon: 'icon-layers', type: 'title', url: '/content', children: [
      { weight: 10, name: 'Events', icon: 'icon-event', url: '/content/events' },
      { weight: 30, name: 'Pages', icon: 'icon-book-open', url: '/content/pages' },
      { weight: 40, name: 'Posts', icon: 'icon-note', url: '/content/posts' },
      { weight: 50, name: 'Products', icon: 'icon-basket', url: '/content/products' },
    ] },
  ],
  dashboardLinks: {
    content: [
      { count: '∞', name: 'Events', type: 'info', icon: 'icon-event', url: '/content/events' },
      { count: '∞', name: 'Pages', type: 'primary', icon: 'icon-book-open', url: '/content/pages' },
      { count: '∞', name: 'Posts', type: 'warning', icon: 'icon-note', url: '/content/posts' },
      { count: '∞', name: 'Products', type: 'danger', icon: 'icon-basket', url: '/content/products' },
    ],
  },
}

@NgModule()
export class ContentConfigModule {
  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }
}
