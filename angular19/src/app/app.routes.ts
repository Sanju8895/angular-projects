import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './commponent_communication/parent/parent.component';
import { TemplateDrivenComponent } from './form_validation/template-driven/template-driven.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'component-communication',
                component: ParentComponent
            },
            {
                path: 'form-validation',
                component: TemplateDrivenComponent
            },
            {
                path: 'directives',
                component: DirectivesComponent
            }
        ]
    }

];
