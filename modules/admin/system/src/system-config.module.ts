import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'system'

const moduleConfig = {
  name: 'System',
  icon: 'icon-settings',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 110, name: 'Domains', icon: 'icon-globe', url: '/system/domains' },
    { weight: 120, name: 'Settings', icon: 'icon-settings', url: '/system/settings' },
    { weight: 130, name: 'Users', icon: 'icon-people', url: '/system/users' },
  ],
  sidebarLinks: [
    { weight: 100, name: 'System', icon: 'icon-equalizer', url: '/system', type: 'title', children: [
      { weight: 110, name: 'Domains', icon: 'icon-globe', url: '/system/domains' },
      { weight: 120, name: 'Settings', icon: 'icon-settings', url: '/system/settings' },
      { weight: 130, name: 'Users', icon: 'icon-people', url: '/system/users' },
    ] },
  ],
  dashboardLinks: {
    system: [
      { count: '∞', name: 'Domains', type: 'info', icon: 'icon-globe', url: '/system/domains' },
      { count: '∞', name: 'Settings', type: 'success', icon: 'icon-settings', url: '/system/settings' },
      { count: '∞', name: 'Users', type: 'warning', icon: 'icon-people', url: '/system/users' },
    ],
  },
}
@NgModule()
export class SystemConfigModule {
  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }
}
