import { NgModule } from '@angular/core'
import { SDKBrowserModule } from '../../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../../packages/admin-ui'

import { ProductsRoutingModule } from './products-routing.module'

import { ProductsService } from './products.service'
import { ProductsResolver } from './products.resolvers'

import { ProductComponent } from './components/product.component'
import { ProductDetailComponent } from './components/product-detail.component'
import { ProductFormComponent } from './components/product-form.component'
import { ProductListComponent } from './components/product-list.component'

@NgModule({
  imports: [AdminUiModule, ProductsRoutingModule, SDKBrowserModule.forRoot()],
  declarations: [ProductComponent, ProductDetailComponent, ProductFormComponent, ProductListComponent],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
