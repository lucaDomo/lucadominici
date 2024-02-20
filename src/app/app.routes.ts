import { Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: NavbarComponent },
    { path: 'project', component: ProjectPageComponent },
];
