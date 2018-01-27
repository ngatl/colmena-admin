import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ConferenceSpeaker, ConferenceSpeakerApi } from '../../../../packages/admin-lb-sdk/src'
import { FormService } from '../../../../packages/admin-ui/src'

export { ConferenceSpeaker } from '../../../../packages/admin-lb-sdk/src'

const icon = 'icon-microphone'

@Injectable()
export class SpeakersService {

  constructor(
    private conferenceSpeakerApi: ConferenceSpeakerApi,
    private formService: FormService,
  ) { }

  findSpeaker(id): Observable<ConferenceSpeaker> {
    return this.conferenceSpeakerApi.findById(id)
  }

  findSpeakers(): Observable<ConferenceSpeaker[]> {
    return this.conferenceSpeakerApi.find()
  }

  upsertSpeaker(item): Observable<ConferenceSpeaker> {
    if (item.id) {
      return this.conferenceSpeakerApi.upsert(item)
    }
    return this.conferenceSpeakerApi.create(item)
  }

  deleteSpeaker(itemId): Observable<any> {
    return this.conferenceSpeakerApi.deleteById(itemId)
  }

  getSpeakerFields() {
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
