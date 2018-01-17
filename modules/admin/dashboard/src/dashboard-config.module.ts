import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'dashboard'

const moduleConfig = {
  name: 'Dashboard',
  icon: 'icon-speedometer',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [{ weight: 0, name: 'Dashboard', icon: 'icon-speedometer', url: '/dashboard' }],
  sidebarLinks: [{ weight: 0, name: 'Dashboard', icon: 'icon-speedometer', url: '/dashboard' }],
  dashboardLinks: {},
}

@NgModule()
export class DashboardConfigModule {
  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }
}
