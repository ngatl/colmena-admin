import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard-dashboard',
  template: `
    <app-conference-dashboard></app-conference-dashboard>
    <app-content-dashboard></app-content-dashboard>
    <app-system-dashboard></app-system-dashboard>
  `,
})
export class DashboardComponent {}
