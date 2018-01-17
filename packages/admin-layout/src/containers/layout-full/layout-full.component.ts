import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-layout-full',
  template: `
    <app-header></app-header>
    <div class="app-body">
      <app-sidebar></app-sidebar>
      <!-- Main content -->
      <main class="main">
        <!-- Breadcrumb -->
        <ol class="breadcrumb">
          <app-breadcrumbs></app-breadcrumbs>
        </ol>
        <div class="container-fluid pb-5">
          <router-outlet></router-outlet>
        </div><!-- /.conainer-fluid -->
      </main>
      <!--<app-aside></app-aside>-->
    </div>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class LayoutFullComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
