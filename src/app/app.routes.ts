import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharacterComponent },
  { path: 'character/:id', component: CharacterDetailComponent }
];
