import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';
import { ConvertSecondstoDHMSPipe } from './pipes/convert-secondsto-dhms.pipe';
import { ConvertisseurComponent } from './components/convertisseur/convertisseur.component';
import { PowPipe } from './pipes/pow.pipe';
import { FormsModule } from '@angular/forms';
import { ConvertTemperaturesPipe } from './pipes/convert-temperatures.pipe';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingBisComponent } from './components/shopping-bis/shopping-bis.component';// Pour le Two Way Binding


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent,
    AccueilComponent,
    ChronoComponent,
    ChronoFormatPipe,
    ConvertSecondstoDHMSPipe,
    ConvertisseurComponent,
    PowPipe,
    ConvertTemperaturesPipe,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingBisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Pour le Two Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
