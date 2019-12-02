import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { PhoneComponent } from './contact/phone/phone.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent }, {
  path: 'contact', component: ContactComponent, children: [{
    path: 'phone', component:PhoneComponent
  }]
}, { path: 'users', component: UsersComponent },{path:'students',component:StudentComponent},{path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
