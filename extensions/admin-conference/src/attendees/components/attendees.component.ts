import { Component } from '@angular/core'
import { UiService } from '../../../../../packages/admin-ui/src'

import { AttendeesService } from '../attendees.service'


@Component({
  selector: 'app-conference-attendees',
  template: `
    <div>
      <h1>
        <a href="" [routerLink]="['add']" class="btn btn-lg btn-success">
          <i class="icon-plus"></i>  Add Attendee
        </a>
      </h1>
    </div>
    <div class="row">
      <app-conference-attendee class="col-md-4" *ngFor="let item of items" [item]="item" (action)="handleAction($event)">
      </app-conference-attendee>
    </div>
  `,
})
export class AttendeesComponent {

  public items: any[]

  constructor(
    private service: AttendeesService,
    private uiService: UiService,
  ) {
    this.loadData()
  }

  loadData() {
    this.service.findAttendees()
      .subscribe(items => this.items = items)
  }

  private handleAction(action) {
    switch (action.type) {
      case 'delete':
        const successCb = () => this.service
          .deleteAttendee(action.payload.id)
          .subscribe(
            () => {
              this.uiService.alerts.notifySuccess({ title: 'Attendee deleted', body: '' })
              this.loadData()
            },
            (err) => this.uiService.alerts.notifyError({ title: 'Error deleting item', body: err.message }))
        const question = { title: 'Are you sure?', text: 'The action can not be undone.' }
        return this.uiService.alerts.alertQuestion( question, successCb, () => ({}) )
      default:
        console.log('Unknown action', action)
    }
  }
}
