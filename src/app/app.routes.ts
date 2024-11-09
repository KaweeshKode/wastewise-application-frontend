import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
    { path: "", component: LandingComponent},
    { path: "signup", component: SignupComponent },
    { path: "signin", component: SigninComponent }
];
