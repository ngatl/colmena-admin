import { NgModule } from '@angular/core'
import { SDKBrowserModule } from '../../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../../packages/admin-ui/src'

import { PagesRoutingModule } from './pages-routing.module'

import { PagesService } from './pages.service'
import { PagesResolver } from './pages.resolvers'

import { PageComponent } from './components/page.component'
import { PageDetailComponent } from './components/page-detail.component'
import { PageFormComponent } from './components/page-form.component'
import { PageListComponent } from './components/page-list.component'

@NgModule({
  imports: [AdminUiModule, PagesRoutingModule, SDKBrowserModule.forRoot()],
  declarations: [PageComponent, PageDetailComponent, PageFormComponent, PageListComponent],
  providers: [PagesService, PagesResolver],
})
export class PagesModule {}
