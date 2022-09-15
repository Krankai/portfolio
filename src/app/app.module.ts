import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionComponent } from './collection/collection.component';
import { AboutComponent } from './about/about.component';
import { ProjectMiluComponent } from './project-milu/project-milu.component';
import { ProjectDinoageComponent } from './project-dinoage/project-dinoage.component';
import { ProjectPrisonbreakComponent } from './project-prisonbreak/project-prisonbreak.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PersonalCollectionComponent } from './personal-collection/personal-collection.component';
import { WorkCollectionComponent } from './work-collection/work-collection.component';
import { GreetingComponent } from './greeting/greeting.component';
import { PersonalCollectionDetailsComponent } from './personal-collection-details/personal-collection-details.component';
import { ProjectMemorileComponent } from './project-memorile/project-memorile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionComponent,
    AboutComponent,
    ProjectMiluComponent,
    ProjectDinoageComponent,
    ProjectPrisonbreakComponent,
    IntroductionComponent,
    PersonalCollectionComponent,
    WorkCollectionComponent,
    GreetingComponent,
    PersonalCollectionDetailsComponent,
    ProjectMemorileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
