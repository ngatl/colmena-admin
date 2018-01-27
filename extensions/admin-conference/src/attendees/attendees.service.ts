import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ConferenceAttendee, ConferenceAttendeeApi } from '../../../../packages/admin-lb-sdk/src'
import { FormService } from '../../../../packages/admin-ui/src'

export { ConferenceAttendee } from '../../../../packages/admin-lb-sdk/src'

const icon = 'icon-microphone'

@Injectable()
export class AttendeesService {

  constructor(
    private conferenceAttendeeApi: ConferenceAttendeeApi,
    private formService: FormService,
  ) { }

  findAttendee(id): Observable<ConferenceAttendee> {
    return this.conferenceAttendeeApi.findById(id)
  }

  findAttendees(): Observable<ConferenceAttendee[]> {
    return this.conferenceAttendeeApi.find()
  }

  upsertAttendee(item): Observable<ConferenceAttendee> {
    if (item.id) {
      return this.conferenceAttendeeApi.upsert(item)
    }
    return this.conferenceAttendeeApi.create(item)
  }

  deleteAttendee(itemId): Observable<any> {
    return this.conferenceAttendeeApi.deleteById(itemId)
  }

  getAttendeeFields() {
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
