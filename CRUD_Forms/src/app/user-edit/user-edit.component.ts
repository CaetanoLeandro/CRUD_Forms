import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.sass',
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.formService
        .getUserById(this.id)
        .subscribe((data) => this.form.patchValue(data));
    }
  }

  save(): void {
    if (this.id) {
      this.formService
        .updateUser(this.id, this.form.value)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.formService
        .createUser(this.form.value)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
