import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialActivityComponent } from './social-activity.component';

const routes: Routes = [{ path: '', component: SocialActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialActivityRoutingModule {}
