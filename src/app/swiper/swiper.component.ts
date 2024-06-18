import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent {

}
