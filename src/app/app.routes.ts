import { projectNameGuard } from './guards/project-name.guard';
import { Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'project/:projectname', component: ProjectPageComponent, canActivate:[projectNameGuard] },
    { path: '404', component: PageNotFoundComponent }, // Definisci la rotta per il 404
    { path: '**', redirectTo: '/404' }  // Qualsiasi altra rotta non trovata
];
