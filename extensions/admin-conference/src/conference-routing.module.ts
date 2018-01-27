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
    { path: '', loadChildren: './speakers/speakers.module#SpeakersModule' },
    { path: '', loadChildren: './sponsors/sponsors.module#SponsorsModule' },
  ],
} ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
