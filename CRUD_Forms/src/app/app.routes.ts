import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' }, 
  { path: 'users', component: UserListComponent }, 
  { path: 'users/edit/:id', component: UserEditComponent }, 
  { path: '**', redirectTo: 'users' }
];
