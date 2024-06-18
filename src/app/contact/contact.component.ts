import { Component, HostListener, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer } from '@angular/platform-browser';
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [
        AsyncPipe,
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        WhatsappButtonComponent
    ]
})
export class ContactComponent {

  constructor(private domSanitizer: DomSanitizer) {}

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

  sanitizedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7951.059745736503!2d-74.06472938108543!3d4.850464000000007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f870042fa527d%3A0xdf5ed0ed2edcec07!2sIndustrias%20ColMet%C3%A1licas!5e0!3m2!1ses!2sco!4v1717011861811!5m2!1ses!2sco');
  correo= "indcolmetalicas@gmail.com";
  direccion= "Cra. 6 #1A-07, Chía, Cundinamarca";
  telephone= "(+57) 318 3815250";
  sanitizedUrlForm = this.domSanitizer.bypassSecurityTrustResourceUrl('https://share.hsforms.com/1Rc5QnRZVSL-646bzHTEXMArjh0b');

  tittle= "Contáctanos Industrias ColMetálicas";
  tittleMap= "Ubícanos";
  tittleForm= "Si tienes alguna duda, comentario o sugerencia, puedes contactarnos y nos comunicaremos contigo lo antes posible.";
  tittleContact= "Tambien puedes contactarnos en:";


}
