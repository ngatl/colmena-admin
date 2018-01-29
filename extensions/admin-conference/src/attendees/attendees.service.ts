import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ConferenceAttendee, ConferenceAttendeeApi } from '../../../../packages/admin-lb-sdk/src'
import { UiDataGridService } from '../../../../packages/admin-ui'

export { ConferenceAttendee } from '../../../../packages/admin-lb-sdk/src'

@Injectable()
export class AttendeesService extends UiDataGridService {

  public icon = 'fa fa-ticket'
  public title = 'Tickets'
  public files: any[] = []

  public tableColumns = [
    { field: 'id', label: 'ID', action: 'view' },
    { field: 'name', label: 'Name', action: 'view' },
    { field: 'email', label: 'Email', action: 'view' },
  ]

  constructor(private api: ConferenceAttendeeApi) {
    super()
    this.columns = this.tableColumns
  }

  getItems(): Observable<ConferenceAttendee[]> {
    return this.api.find(this.getFilters())
  }

  getItem(id): Observable<ConferenceAttendee> {
    const filters = {
      include: [{
        relation: 'notes',
        scope: {
          include: 'peer',
        }
      }, {
        relation: 'tickets',
        scope: {
          include: 'release',
        }
      }],
    }

    return this.api.findById(id, filters)
  }

  getItemCount(): Observable<any> {
    return this.api.count(this.getWhereFilters())
  }

}
