import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { FormService } from '../../../../packages/admin-ui/src'

import { ConferenceSponsor, ConferenceSponsorApi } from '../../../../packages/admin-lb-sdk/'
export { ConferenceSponsor, ConferenceSponsorApi } from '../../../../packages/admin-lb-sdk/'

const icon = 'icon-diamond'

@Injectable()
export class SponsorsService {

  constructor(
    private conferenceSponsorApi: ConferenceSponsorApi,
    private formService: FormService,
  ) { }

  findSponsor(id): Observable<ConferenceSponsor> {
    return this.conferenceSponsorApi.findById(id)
  }

  findSponsors(): Observable<ConferenceSponsor[]> {
    return this.conferenceSponsorApi.find()
  }

  upsertSponsor(item): Observable<ConferenceSponsor> {
    if (item.id) {
      return this.conferenceSponsorApi.upsert(item)
    }
    return this.conferenceSponsorApi.create(item)
  }

  deleteSponsor(itemId): Observable<any> {
    return this.conferenceSponsorApi.deleteById(itemId)
  }


  getSponsorFields() {
    return {
      icon: icon,
      fields: [
        this.formService.input('name', { label: 'Name', placeholder: 'Name' }),
        this.formService.textarea('description', { label: 'Description', placeholder: 'Description' }),
        this.formService.input('imageUrl', { label: 'Image Url', placeholder: 'Image Url' }),
        this.formService.input('website', { label: 'website', placeholder: 'website' }),
        this.formService.input('level', { label: 'level', placeholder: 'level' }),
      ]
    }
  }


  getFormFields() {
    return [
      this.formService.input('id', {
        label: 'ID',
        placeholder: 'ID',
      }),
      this.formService.input('name', {
        label: 'Name',
        placeholder: 'Name',
      }),
      this.formService.input('imageUrl', {
        label: 'Image Url',
        placeholder: 'Image Url',
      }),
    ]
  }

  getFormConfig() {
    return {
      icon: 'icon-diamond',
      fields: this.getFormFields(),
      showCancel: true,
      hasHeader: false,
    }
  }
}
