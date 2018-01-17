import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { DataPersistence } from '@nrwl/nx'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/switchMap'
import { LayoutState } from './layout.interfaces'

@Injectable()
export class LayoutEffects {
  constructor(private actions: Actions, private d: DataPersistence<LayoutState>) {}
}
