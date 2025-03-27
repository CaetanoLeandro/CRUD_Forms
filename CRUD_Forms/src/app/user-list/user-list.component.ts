import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormService, User } from '../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass',
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private formService: FormService, private http: HttpClient) {}

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
