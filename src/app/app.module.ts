import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharactersService } from './shared/services/characters.service';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
