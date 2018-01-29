import { Component } from '@angular/core'
import { UiService } from '../../../../../packages/admin-ui/src'

import { SponsorsService } from '../sponsors.service'

@Component({
  selector: 'app-conference-sponsors',
  template: `
    <div class="row">
      <app-conference-sponsor class="col-md-4" *ngFor="let item of items" [item]="item" (action)="handleAction($event)">
      </app-conference-sponsor>
    </div>
  `,
})
export class SponsorsComponent {

  public items: any[]

  constructor(
    private service: SponsorsService,
    private uiService: UiService,
  ) {
    this.loadData()
  }

  loadData() {
    this.service.findSponsors()
      .subscribe(items => this.items = items)
  }

  private handleAction(action) {
    switch (action.type) {
      case 'delete':
        const successCb = () => this.service
          .deleteSponsor(action.payload.id)
          .subscribe(
            () => {
              this.uiService.alerts.notifySuccess({ title: 'Sponsor deleted', body: ''})
              this.loadData()
            },
            (err) => this.uiService.alerts.notifyError({ title: 'Error deleting item', body: err.message}))
        const question = { title: 'Are you sure?', text: 'The action can not be undone.' }
        return this.uiService.alerts.alertQuestion( question, successCb, () => ({}) )
      default:
        console.log('Unknown action', action)
    }
  }
}
