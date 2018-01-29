import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TicketsComponent } from './components/tickets.component'
import { TicketsIndexComponent } from './components/tickets-index.component'

export const routes: Routes = [ {
  path: '',
  data: {
    title: 'Tickets',
  },
  component: TicketsIndexComponent,
  children: [
    { path: '', component: TicketsComponent, data: { title: 'Tickets' } },
  ],
} ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
