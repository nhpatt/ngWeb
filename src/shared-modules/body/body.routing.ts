import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BodyComponent } from './body.component'
//import {ContactUsModule} from '../shared-modules/contact-us/contact-us.module';
//import { BodyModule } from '../shared-modules/body/body.module'



export const routes: Routes = [
        // { path: '', redirectTo: 'index', pathMatch: 'full' },
        //{ path: 'index', component: AppComponent},
        { path: '/', component:BodyComponent },
        // { path: 'contact-us', loadChildren: '../shared-modules/contact-us/contact-us.module#ContactUsModule' },
        //{ path:'**', redirectTo: 'index'}
];
export const BODY_ROUTES = RouterModule.forChild(routes);