import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'

import { Store } from '@ngrx/store'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Injectable()
export class DomainResolver implements Resolve<any> {
  constructor(private store: Store<any>) {}

  resolve() {
    console.log('resolve')
    return this.store
      .select('app')
      .map((res: any) => res.activeDomain)
      .take(1)
      .map((res: any) => {
        console.log('res', res)
        return res
      })
      // .add(res => console.log('res', res))
  }
}
