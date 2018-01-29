import { ConferenceAttendee } from './../../../../../packages/admin-lb-sdk/src/models/ConferenceAttendee';
import { Component, ViewChild } from '@angular/core'
import { UiService } from '../../../../../packages/admin-ui/src'

import { TicketsService } from '../tickets.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-conference-tickets',
  template: `
    <div class="alert alert-info" *ngIf="syncing">Syncing data from ti.to, please wait a bit...</div>
    <div class="alert alert-info" *ngIf="extracting">Extracting data from ti.to, please wait a bit...</div>
    <ui-data-grid #grid (action)="action($event)" [config]="config" [service]="service"></ui-data-grid>
  `,
})
export class TicketsComponent {
  @ViewChild('grid') private grid
  public syncing = false
  public extracting  = false
  public config = {
    header: {
      buttons: [
        { icon: 'fa fa-refresh', action: 'refreshTickets', label: 'Sync TITO', classNames: 'btn btn-success'},
      ]
    }
  }
  constructor(
    public service: TicketsService,
    private ui: UiService,
    private router: Router,
  ) {}

  action(event) {
    switch (event.action) {
      case 'attendee':
        this.router.navigate(['/conference/attendees/', event.item.conferenceAttendeeId])
        break
      case 'edit':
      case 'view':
        const html = `
          <div class='text-left'>
            <b>ID: </b> <a href="https://ti.to/tickets/${event.item.id}" target="_blank">${event.item.id}</a> <br /><br />
            <b>Name: </b> ${event.item.name} <br /><br />
            <b>Email: </b> ${event.item.email} <br /><br />
            <b>Company: </b> ${event.item['company-name']} <br /><br />
          </div>
        `
        this.ui.alerts.alertInfo({ title: event.item.name, html })
        break;
      case 'refreshTickets':
        this.sync()
        break
      default:
        return console.log('Unknown event action', event)
    }
  }

  sync() {
    this.syncing = true
    this.ui.alerts.notifyInfo({ title: 'Sync Started', body: ''})
    this.service.sync()
    .subscribe((res) => {
      this.syncing = false
      this.ui.alerts.notifySuccess({ title: 'Sync Done', body: `${res.count} items synced`})
      this.extract()
    })
  }

  extract() {
    this.extracting = true
    this.ui.alerts.notifyInfo({ title: 'Extract Started', body: ''})
    this.service.extract()
      .subscribe((res) => {
        this.extracting = false
        this.ui.alerts.notifySuccess({ title: 'Extract Done', body: `${res.count} items synced`})
      })
  }

}
