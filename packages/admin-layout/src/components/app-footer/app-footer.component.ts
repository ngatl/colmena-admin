import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Layout, LayoutState } from '../../+state/layout.interfaces'

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
})
export class AppFooterComponent implements OnInit {
  public footerLeft: string
  public footerRight: string

  constructor(private store: Store<LayoutState>) {}

  ngOnInit() {
    this.store.select('layout').subscribe((res: Layout) => {
      this.footerLeft = res.footerLeft
      this.footerRight = res.footerRight
    })
  }
}
