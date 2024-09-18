import { Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'project', component: ProjectPageComponent },
];
