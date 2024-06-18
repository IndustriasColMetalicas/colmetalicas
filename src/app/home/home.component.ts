import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SwiperComponent } from "../swiper/swiper.component";
import { AddressFormComponent } from "../address-form/address-form.component";
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      SwiperComponent,
      AddressFormComponent,
      WhatsappButtonComponent,
      MatIconModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeComponent {

  @HostListener('window:scroll', [])
   onWindowScroll() {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0
    ) {
      document.getElementById('appear')?.classList.add('active')
    }
    else(
      document.getElementById('appear')?.classList.remove('active')
    )
  }

  titleTop= 'Industrias ColMetálicas';
  text1Top= 'Somos líderes en la fabricación, mantenimiento y reparación de productos metálicos diseñados para aplicaciones estructurales. ';
  text2Top= 'Nuestra empresa se destaca por su compromiso con la excelencia, ofreciendo soluciones robustas y duraderas que cumplen con los más altos estándares de la industria.';
  tittleMiddle= "Innovación y Calidad en Soluciones Metálicas Estructurales";
  text1Middle= "Fabricación de todo tipo de Estructuras Metálicas incluyendo: Puertas, Escaleras, Pérgolas, Estanterias";
  text2Middle= "Mantenimiento y Reparación Especializada de estructuras metálicas";

}
