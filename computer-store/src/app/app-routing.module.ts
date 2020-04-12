import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignUpPageNextStepComponent } from './sign-up-page-next-step/sign-up-page-next-step.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: "login-page", component: LoginPageComponent },
  { path: "sign-up-page", component: SignUpPageComponent},
  { path: 'sign-up-page-next-step', component: SignUpPageNextStepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
