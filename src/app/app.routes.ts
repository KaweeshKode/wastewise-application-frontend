import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { compileClassDebugInfo } from '@angular/compiler';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: "", component: LandingComponent},
    { path: "signup", component: SignupComponent },
    { path: "signin", component: SigninComponent },
    {
        path: "home",
        component: HomeComponent,
        children: [
            { path: "", component: HomeComponent }
        ]
    }
];
