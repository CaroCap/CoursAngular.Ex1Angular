import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ConvertisseurComponent } from './components/convertisseur/convertisseur.component'
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingBisComponent } from './components/shopping-bis/shopping-bis.component';

const routes: Routes = [
  {path : '', component : AccueilComponent}, 
  {path : 'skills', component : SkillsComponent},
  {path : 'contacts', component : ContactsComponent},
  {path : 'convertisseur', component : ConvertisseurComponent},

  { path: "exos", children: 
  [
    { path: "convertisseur", component: ConvertisseurComponent },
    { path : 'shopping', component : ShoppingComponent},
    { path : 'shopping-bis', component : ShoppingBisComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
