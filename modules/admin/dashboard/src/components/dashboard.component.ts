import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard-dashboard',
  template: `
    <app-content-dashboard></app-content-dashboard>
    <app-system-dashboard></app-system-dashboard>
  `,
})
export class DashboardComponent {}
