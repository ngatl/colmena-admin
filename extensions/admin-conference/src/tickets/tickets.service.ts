import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ConferenceTicket, ConferenceTicketApi } from '../../../../packages/admin-lb-sdk/src'
import { UiDataGridService } from '../../../../packages/admin-ui'

export { ConferenceTicket } from '../../../../packages/admin-lb-sdk/src'

@Injectable()
export class TicketsService extends UiDataGridService {

  public icon = 'fa fa-users'
  public title = 'Attendees'
  public files: any[] = []

  public tableColumns = [
    { field: 'id', label: 'ID', action: 'view' },
    { field: 'name', label: 'Name', action: 'attendee' },
    { field: 'email', label: 'Email', action: 'attendee' },
  ]

  constructor(private api: ConferenceTicketApi) {
    super()
    this.columns = this.tableColumns
  }

  getItems(): Observable<ConferenceTicket[]> {
    return this.api.find(this.getFilters())
  }

  getItem(id): Observable<ConferenceTicket> {
    return this.api.findById(id)
  }

  getItemCount(): Observable<any> {
    return this.api.count(this.getWhereFilters())
  }

  sync() {
    return this.api.sync()
  }

  extract() {
    return this.api.extractAll()
  }

}
