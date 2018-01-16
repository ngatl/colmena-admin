import { NgModule } from '@angular/core'
import { SDKBrowserModule } from '../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../packages/admin-ui/src'

import { ContentDashboardComponent } from './content.component'
import { HasContentAccess } from './content.guards'
import { DomainResolver } from './content.resolvers'
import { ContentRoutingModule } from './content-routing.module'

@NgModule({
  imports: [AdminUiModule, ContentRoutingModule, SDKBrowserModule.forRoot()],
  declarations: [ContentDashboardComponent],
  exports: [ContentDashboardComponent],
  providers: [HasContentAccess, DomainResolver],
})
export class ContentModule {}
