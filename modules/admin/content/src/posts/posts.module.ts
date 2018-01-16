import { NgModule } from '@angular/core'
import { SDKBrowserModule } from '../../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../../packages/admin-ui'

import { PostsRoutingModule } from './posts-routing.module'

import { PostsService } from './posts.service'
import { PostsResolver } from './posts.resolvers'

import { PostComponent } from './components/post.component'
import { PostDetailComponent } from './components/post-detail.component'
import { PostFormComponent } from './components/post-form.component'
import { PostListComponent } from './components/post-list.component'

@NgModule({
  imports: [AdminUiModule, PostsRoutingModule, SDKBrowserModule.forRoot()],
  declarations: [PostComponent, PostDetailComponent, PostFormComponent, PostListComponent],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
