import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ConferenceDashboardComponent } from './conference.component'

export const routes: Routes = [ {
  path: '',
  data: {
    title: 'Conference',
  },
  children: [
    { path: '', component: ConferenceDashboardComponent },
    { path: 'attendees', loadChildren: './attendees/attendees.module#AttendeesModule' },
    { path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersModule' },
    { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsModule' },
    { path: 'tickets', loadChildren: './tickets/tickets.module#TicketsModule' },
  ],
} ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
