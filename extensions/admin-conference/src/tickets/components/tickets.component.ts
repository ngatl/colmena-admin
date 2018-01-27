import { Component } from '@angular/core'
import { UiService } from '../../../../../packages/admin-ui/src'

import { TicketsService } from '../tickets.service'


@Component({
  selector: 'app-conference-tickets',
  template: `
    <div>
      <h1>
        <a href="" [routerLink]="['add']" class="btn btn-lg btn-success">
          <i class="icon-plus"></i>  Add Ticket
        </a>
      </h1>
    </div>
    <div class="row">
      <app-conference-ticket class="col-md-4" *ngFor="let item of items" [item]="item" (action)="handleAction($event)">
      </app-conference-ticket>
    </div>
  `,
})
export class TicketsComponent {

  public items: any[]

  constructor(
    private service: TicketsService,
    private uiService: UiService,
  ) {
    this.loadData()
  }

  loadData() {
    this.service.findTickets()
      .subscribe(items => this.items = items)
  }

  private handleAction(action) {
    switch (action.type) {
      case 'delete':
        const successCb = () => this.service
          .deleteTicket(action.payload.id)
          .subscribe(
            () => {
              this.uiService.alerts.notifySuccess({ title: 'Ticket deleted', body: '' })
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
