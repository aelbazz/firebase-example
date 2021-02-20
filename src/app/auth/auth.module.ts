import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'signin', component: SigninComponent, data: { title: 'Sign in ' } },
  { path: 'signout', component: SignoutComponent, data: { title: 'Sign Out' } },
  { path: 'reset-password', component: ResetPasswordComponent, data: { title: 'Reset Password' } },
];

@NgModule({
  declarations: [SigninComponent, SignoutComponent, ResetPasswordComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AuthModule {}
