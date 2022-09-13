import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalCollectionComponent } from './personal-collection/personal-collection.component';
import { WorkCollectionComponent } from './work-collection/work-collection.component';

const routes: Routes = [
  { path: '', component: CollectionComponent },
  { path: 'personal', component: PersonalCollectionComponent },
  { path: 'work', component: WorkCollectionComponent },
  { path: 'projects', component: CollectionComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
