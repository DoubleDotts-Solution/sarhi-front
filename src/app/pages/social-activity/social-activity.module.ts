import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialActivityRoutingModule } from './social-activity-routing.module';
import { SocialActivityComponent } from './social-activity.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [SocialActivityComponent],
  imports: [CommonModule, SocialActivityRoutingModule, MarkdownModule.forRoot()],
})
export class SocialActivityModule {}
