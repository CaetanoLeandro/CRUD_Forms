import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormService, User } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule, 
  ],
  providers: [
    FormService,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass',
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.formService.getUsers().subscribe((data) => (this.users = data));
  }

  deleteUser(id: number): void {
    this.formService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
