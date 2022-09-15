import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalCollectionComponent } from './personal-collection/personal-collection.component';
import { WorkCollectionComponent } from './work-collection/work-collection.component';
import { ProjectMiluComponent } from './project-milu/project-milu.component';
import { PersonalCollectionDetailsComponent } from './personal-collection-details/personal-collection-details.component';

const routes: Routes = [
  { path: '', component: CollectionComponent },

  { path: 'personal/:name', component: PersonalCollectionDetailsComponent },
  { path: 'personal', component: PersonalCollectionComponent },

  { path: 'work', component: WorkCollectionComponent },

  { path: 'projects/:name', component: ProjectMiluComponent },
  { path: 'projects', component: CollectionComponent },

  { path: 'about', component: AboutComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
