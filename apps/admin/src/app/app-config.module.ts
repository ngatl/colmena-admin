import { NgModule } from '@angular/core'
import { AuthConfigModule } from '../../../../modules/admin/auth/src'
import { ContentConfigModule } from '../../../../modules/admin/content/src'
import { DashboardConfigModule } from '../../../../modules/admin/dashboard/src'
import { SystemConfigModule } from '../../../../modules/admin/system/src'

@NgModule({
  imports: [
    AuthConfigModule,
    ContentConfigModule,
    DashboardConfigModule,
    SystemConfigModule,
  ],
})
export class AppConfigModule {}
