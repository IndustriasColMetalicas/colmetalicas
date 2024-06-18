import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'productos', component: ProductsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


