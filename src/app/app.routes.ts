import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';


export const routes: Routes = [
    { path: "", component: MissionlistComponent },
    { path: "details/:id", component: MissiondetailsComponent },
    { path: "**", component: ErrorcomponentComponent }
];
