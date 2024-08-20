import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { PostListComponent } from './post-list.component';
import { RegisterComponent } from './register/register.component';
import{UserProfileComponent} from'./user-profile/user-profile.component'

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
