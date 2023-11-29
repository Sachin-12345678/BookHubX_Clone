import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { CommunityComponent } from './community/community.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'bookstore', component: BookstoreComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/bookstore', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
