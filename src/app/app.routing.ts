import { ModuleWithProviders } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
    { 
        path:'',
        component: HomeComponent,
    },
    {
        path:'portfolio',
        component: MainComponent,
    },
    {
        path:'skill',
        component:AboutComponent ,
    },
    {
        path:'hobbies',
        component: HobbiesComponent,
    },
];
export const Route : ModuleWithProviders=RouterModule.forRoot(routes);