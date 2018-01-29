import { NgModule } from '@angular/core'
import { ConferenceModule } from '../../../../extensions/admin-conference/src'
import { SDKBrowserModule } from '../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../packages/admin-ui/src'
import { ContentModule } from '../../content/src'
import { SystemModule } from '../../system/src'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardService } from './dashboard.service'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { PasswordComponent } from './components/password.component'
import { ProfileComponent } from './components/profile.component'

@NgModule({
  imports: [AdminUiModule, DashboardRoutingModule, SDKBrowserModule.forRoot(), ConferenceModule, ContentModule, SystemModule],
  declarations: [AboutComponent, DashboardComponent, IndexComponent, PasswordComponent, ProfileComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
