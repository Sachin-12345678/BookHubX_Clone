import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { CommunityComponent } from './community/community.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    BookstoreComponent,
    CommunityComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
