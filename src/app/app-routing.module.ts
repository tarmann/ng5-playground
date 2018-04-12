import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryListComponent } from './story-list/story-list.component'
import { MyTestComponent } from './my-test/my-test.component'

const routes: Routes = [
   { path: '', redirectTo: '/stories', pathMatch: 'full' },
   { path: 'stories', component: StoryListComponent },
   { path: 'user-preferences', component: MyTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
