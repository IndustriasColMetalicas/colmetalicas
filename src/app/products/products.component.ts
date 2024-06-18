import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";
import { MatIconModule } from '@angular/material/icon';
import { SwiperComponent } from '../swiper/swiper.component';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
      WhatsappButtonComponent,
      MatIconModule,
      SwiperComponent
    ]
})
export class ProductsComponent {

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

  titleTop= 'Productos Industrias ColMetálicas';
  text1Top= 'Soluciones Metálicas para Cada Necesidad';
  text2Top= 'Desde puertas robustas hasta elegantes pérgolas, en Industrias ColMetálicas diseñamos y fabricamos productos metálicos adaptados a tus requerimientos estructurales';
  tittleMiddle= "Calidad y Durabilidad en Cada Estructura";
  text1Middle= "Fabricación de todo tipo de Estructuras Metálicas incluyendo: Puertas, Escaleras, Pérgolas, Estanterias";
  text2Middle= "En Industrias ColMetálicas, la artesanía y la tecnología se unen para ofrecerte productos metálicos de primera clase, diseñados para destacar";



}
