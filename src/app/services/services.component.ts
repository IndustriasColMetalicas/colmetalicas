import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";
import { MatIconModule } from '@angular/material/icon';
import { SwiperComponent } from '../swiper/swiper.component';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    WhatsappButtonComponent,
    MatIconModule,
    SwiperComponent
  ]
})
export class ServicesComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0
    ) {
      document.getElementById('appear')?.classList.add('active')
    }
    else (
      document.getElementById('appear')?.classList.remove('active')
    )
  }

  titleTop = 'Servicios Industrias ColMetálicas';
  text1Top = 'Servicio Integral en Estructuras Metálicas';
  text2Top = 'Desde la fabricación hasta el mantenimiento y reparación, en Industrias ColMetálicas te ofrecemos un servicio integral para todas tus necesidades estructurales';
  tittleMiddle = "Artesanía Metálica de Primera Clase";
  text1Middle = "En Industrias ColMetálicas, transformamos tus ideas en realidad con productos metálicos hechos a medida. ¡Convierte tu visión en estructuras sólidas y elegantes!";
  text2Middle = "Mantenimiento y Reparación Especializada de estructuras metálicas";

}
