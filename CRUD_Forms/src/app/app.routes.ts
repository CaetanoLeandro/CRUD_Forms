import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: 'new', component: UserEditComponent },
];
