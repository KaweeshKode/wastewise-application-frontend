import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { MctManageComponent } from './pages/mct-manage/mct-manage.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", component: LandingComponent},
    { path: "signup", component: SignupComponent },
    { path: "signin", component: SigninComponent },
    {
        path: "home",
        component: HomeComponent,
        children: [
            { path: "dashboard", component: DashboardComponent},
            { path: "user", component: UserManageComponent},
            { path: "mct", component: MctManageComponent}
        ]
    }
];
