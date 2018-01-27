import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ConferenceTicket, ConferenceTicketApi } from '../../../../packages/admin-lb-sdk/src'
import { FormService } from '../../../../packages/admin-ui/src'

export { ConferenceTicket } from '../../../../packages/admin-lb-sdk/src'

const icon = 'icon-microphone'

@Injectable()
export class TicketsService {

  constructor(
    private conferenceTicketApi: ConferenceTicketApi,
    private formService: FormService,
  ) { }

  findTicket(id): Observable<ConferenceTicket> {
    return this.conferenceTicketApi.findById(id)
  }

  findTickets(): Observable<ConferenceTicket[]> {
    return this.conferenceTicketApi.find()
  }

  upsertTicket(item): Observable<ConferenceTicket> {
    if (item.id) {
      return this.conferenceTicketApi.upsert(item)
    }
    return this.conferenceTicketApi.create(item)
  }

  deleteTicket(itemId): Observable<any> {
    return this.conferenceTicketApi.deleteById(itemId)
  }

  getTicketFields() {
    return {
      icon: icon,
      fields: [
        this.formService.input('name', { label: 'Name', placeholder: 'Name' }),
        this.formService.textarea('description', { label: 'Description', placeholder: 'Description' }),
        this.formService.input('imageUrl', { label: 'Image Url', placeholder: 'Image Url' }),
        this.formService.input('website', { label: 'website', placeholder: 'website' }),
        this.formService.input('twitter', { label: 'Twitter', placeholder: 'Twitter' }),
        this.formService.input('github', { label: 'GitHub', placeholder: 'GitHub' }),
        this.formService.input('stackoverflow', { label: 'StackOverflow', placeholder: 'StackOverflow' }),
        this.formService.input('linkedin', { label: 'LinkedIn', placeholder: 'LinkedIn' }),
        this.formService.input('medium', { label: 'Medium', placeholder: 'Medium' }),
      ]
    }
  }

}
