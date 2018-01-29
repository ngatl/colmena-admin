import { NgModule } from '@angular/core'
import { AppSharedModule } from '../../../apps/admin/src/app/app-shared.module'

import { DashboardRoutingModule } from './conference-routing.module'
import { ConferenceDashboardComponent } from './conference.component'

@NgModule({
  imports: [
    AppSharedModule,
    DashboardRoutingModule,
  ],
  declarations: [ConferenceDashboardComponent],
  exports: [ConferenceDashboardComponent],
})
export class ConferenceModule { }
