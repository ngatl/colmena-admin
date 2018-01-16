import { NgModule } from '@angular/core'
import { AppSharedModule } from '../../../../apps/admin/src/app/app-shared.module'

import { SystemDashboardComponent } from './system.component'

import { SystemRoutingModule } from './system-routing.module'
import { HasSystemAccess } from './system.guards'

@NgModule({
  imports: [AppSharedModule, SystemRoutingModule],
  declarations: [SystemDashboardComponent],
  providers: [HasSystemAccess],
  exports: [SystemDashboardComponent],
})
export class SystemModule {}
