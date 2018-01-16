import { NgModule } from '@angular/core'
import { SDKBrowserModule } from '../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../packages/admin-ui/src'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardService } from './dashboard.service'

// import { ContentModule } from '@colmena/module-admin-content'
// import { SystemModule } from '@colmena/module-admin-system'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { PasswordComponent } from './components/password.component'
import { ProfileComponent } from './components/profile.component'

@NgModule({
  imports: [AdminUiModule, DashboardRoutingModule, SDKBrowserModule.forRoot(), ],
  declarations: [AboutComponent, DashboardComponent, IndexComponent, PasswordComponent, ProfileComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
