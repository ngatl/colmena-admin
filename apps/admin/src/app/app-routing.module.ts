import { Routes, RouterModule, ExtraOptions } from '@angular/router'

import { LayoutFullComponent, LayoutSimpleComponent } from '../../../../packages/admin-layout/'

import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterComponent } from './components/router/router.component'

const routeConfig: ExtraOptions = {
  enableTracing: true,
  initialNavigation: 'enabled',
  useHash: true,
}

const routes: Routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  {
    path: '',
    component: LayoutSimpleComponent,
    children: [
      { path: '', loadChildren: '../../../../modules/admin/auth/src/auth.module#AuthModule' },
      { path: 'router', component: RouterComponent },
      { path: 'not-found', component: NotFoundComponent },
    ],
  },
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      // { path: '', loadChildren: './extensions-routing.module#ExtensionsRoutingModule' },
      { path: 'content', loadChildren: '../../../../modules/admin/content/src/content.module#ContentModule' },
      // { path: 'core', loadChildren: '@colmena/module-admin-core#CoreModule' },
      { path: 'dashboard', loadChildren: '../../../../modules/admin/dashboard/src/dashboard.module#DashboardModule' },
      // { path: 'browser', loadChildren: '@colmena/module-admin-data-browser#DataBrowserModule' },
      // { path: 'development', loadChildren: '@colmena/module-admin-dev#DevModule' },
      // { path: 'storage', loadChildren: '@colmena/module-admin-storage#StorageModule' },
      // { path: 'system', loadChildren: '@colmena/module-admin-system#SystemModule' },
    ],
  },
  { path: '**', redirectTo: 'not-found' },
]

export const adminRoutes = RouterModule.forRoot(routes, routeConfig)
