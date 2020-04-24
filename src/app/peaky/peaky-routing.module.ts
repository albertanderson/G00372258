import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeakyPage } from './peaky.page';

const routes: Routes = [
  {
    path: '',
    component: PeakyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeakyPageRoutingModule {}
