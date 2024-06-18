import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from "../home/home.component";


@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrl: './address-form.component.scss',
    standalone: true,
    imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        HomeComponent
    ]
})
export class AddressFormComponent {
[x: string]: any;
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    name: [null, Validators.required],
    email: [null, Validators.compose([Validators.email, Validators.required])],
    telephone: [null, Validators.compose([
      Validators.min(3000000000), Validators.minLength(7), Validators.maxLength(10)])],
    text: null,

  });

  hasUnitNumber = false;


  onSubmit(): void {
    alert('Thanks!');
  }
}
