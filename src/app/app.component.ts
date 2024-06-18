import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddressFormComponent } from "./address-form/address-form.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        AddressFormComponent,
        HeaderComponent,
        RouterLink,
        RouterLinkActive,
        HomeComponent,
        FooterComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppComponent {
  title = 'colmetalicas';
}
