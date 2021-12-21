import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path : '', component : AccueilComponent}, 
  {path : 'skills', component : SkillsComponent},
  {path : 'contacts', component : ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
