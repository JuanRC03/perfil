import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';

export interface ModeloElement {
  url: string;
  nombre: string;
  descripcion: string;
  urlProyecto: string;
}

const PROYECTOS_DATA: ModeloElement[] = [
  {url: 'assets/img/portfolio1.jpg', nombre: 'Paseo Virtual ESPOCH - FIE 2021', descripcion: 'Proyecto realizado en Unity con el leguaje de programación C#, y con el programa SketchUp para el modelado de los edificios.', urlProyecto: 'https://drive.google.com/file/d/1LVz-PWhI6E5RKI9tq0cUMvg7BRI5yj7K/view'},
  {url: 'assets/img/portfolio2.jpg', nombre: 'Proyecto de Realidad Aumentada', descripcion: 'Proyecto de realidad aumentada mediante el uso de la herramienta Vuforia – Unity. Y SketchUp para el modelado.', urlProyecto: 'https://drive.google.com/drive/folders/19ZhQe4V_Mgb6rrk1U4ucxvVNXrWKW1cJ?usp=sharing'},
  {url: 'assets/img/portfolio3.jpg', nombre: 'Objeto de Aprendizaje', descripcion: 'Objeto de aprendizaje realizado para la asignatura de “Entornos virtuales de aprendiza” mediante el uso de HTML, CSS y JavaScript. El proyecto permite a los estudiantes aprender sobre los ciclos de repetición en el leguaje de programación C++.', urlProyecto: 'https://juanrc03.github.io/Objeto-de-Aprendizaje/'},
  {url: 'assets/img/portfolio1.jpg', nombre: 'Ejem5', descripcion: 'des5', urlProyecto: ''},
];


SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor() {}
  dataSourceProyectos = PROYECTOS_DATA;
  ngAfterViewInit(): void {
    const swiper = new Swiper('.portfolio__container', {
      cssMode: true,
      // mousewheel: true,
      // keyboard: true,
      // slidesPerView: 1,
      // spaceBetween: 30,
      // loop: true,
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {}
}
