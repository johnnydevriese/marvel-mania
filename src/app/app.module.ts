import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { routing, appRoutingProviders} from './app.routing';
import { CharactersService } from './shared/services/characters.service';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
// import { EntitiesService } from './shared/services/entities.service';
import { EntitiesListComponent } from './shared/components/entities-list/entities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    NavigationComponent,
    EntitiesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    CharactersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

