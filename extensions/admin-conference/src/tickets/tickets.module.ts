import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../../../apps/admin/src/app/app-shared.module'

import { TicketsService } from './tickets.service'
import { TicketsRoutingModule } from './tickets-routing.module'

import { TicketComponent } from './components/ticket.component'
import { TicketsIndexComponent } from './components/tickets-index.component'
import { TicketsComponent } from './components/tickets.component'

@NgModule({
  imports: [
    AppSharedModule,
    TicketsRoutingModule,
  ],
  declarations: [
    TicketComponent,
    TicketsIndexComponent,
    TicketsComponent,
  ],
  providers: [
    TicketsService,
  ]
})
export class TicketsModule { }
