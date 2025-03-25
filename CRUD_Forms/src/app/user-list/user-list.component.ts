import { Component, OnInit } from '@angular/core';
import { FormService, User } from '../user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
