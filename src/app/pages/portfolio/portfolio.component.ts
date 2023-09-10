import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
  Inject
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface ModeloElement {
  url: string;
  nombre: string;
  descripcion: string;
  urlProyecto: string;
  descUno: string,
  urlImgUno: string,
  descDos: string,
  urlImgDos: string,
  descTres: string,
  urlImgTres: string,
  descCuatro: string,
  urlImgCuatro: string,
}

const PROYECTOS_DATA: ModeloElement[] = [
  
  {url: 'assets/proyectos/cafe/img1.JPG', nombre: 'Cafe Molido', descripcion: 'El proyecto se desarrolló en Visual Studio utilizando el lenguaje de programación C#. Este programa tiene la finalidad de facilitar la gestión de productos y sus respectivas categorías, así como la administración de clientes. Además, proporciona funcionalidades para llevar a cabo eficientemente la venta de productos de la tienda "Cafe Molido".', urlProyecto: 'https://github.com/JuanRC03/cafe_molido',
  descUno: 'Pantlla de inicio',urlImgUno: 'assets/proyectos/cafe/img1.JPG',
  descDos: 'Módulo de ventas',urlImgDos: 'assets/proyectos/cafe/img2.JPG',
  descTres: 'Reporte de compras realizadas',urlImgTres: 'assets/proyectos/cafe/img3.JPG',
  descCuatro: 'Reporte de productos',urlImgCuatro: 'assets/proyectos/cafe/img4.JPG',},

  {url: 'assets/proyectos/mr/img1.JPG', nombre: 'MR Fashion', descripcion: 'El proyecto se desarrolló en Visual Studio utilizando el lenguaje de programación C#. Este programa tiene la finalidad de facilitar la gestión de productos y sus respectivas categorías, así como la administración de clientes. Además, proporciona funcionalidades para llevar a cabo eficientemente la venta de productos de la tienda "MR Fashion".', urlProyecto: 'https://github.com/JuanRC03/mr_fashion',
  descUno: 'Pantlla de inicio',urlImgUno: 'assets/proyectos/mr/img1.JPG',
  descDos: 'Módulo de ventas',urlImgDos: 'assets/proyectos/mr/img2.JPG',
  descTres: 'Consulta de productos',urlImgTres: 'assets/proyectos/mr/img3.JPG',
  descCuatro: 'Consulta de clientes',urlImgCuatro: 'assets/proyectos/mr/img4.JPG',},

  {url: 'assets/proyectos/pv/img1.JPG', nombre: 'Paseo Virtual ESPOCH - FIE 2021', descripcion: 'Proyecto realizado en Unity con el leguaje de programación C#, y con el programa SketchUp para el modelado de los edificios.', urlProyecto: 'https://drive.google.com/file/d/1LVz-PWhI6E5RKI9tq0cUMvg7BRI5yj7K/view',
  descUno: 'Pantlla de inicio',urlImgUno: 'assets/proyectos/pv/img1.JPG',
  descDos: 'Modelo 3D de la FIE',urlImgDos: 'assets/proyectos/pv/img2.JPG',
  descTres: 'Eleccion de personaje',urlImgTres: 'assets/proyectos/pv/img3.JPG',
  descCuatro: 'Personaje en el paseo virtual',urlImgCuatro: 'assets/proyectos/pv/img4.JPG',},

  {url: 'assets/proyectos/ra/img1.JPG', nombre: 'Proyecto de Realidad Aumentada', descripcion: 'Proyecto de realidad aumentada mediante el uso de la herramienta Vuforia – Unity. Y SketchUp para el modelado.', urlProyecto: 'https://drive.google.com/drive/folders/19ZhQe4V_Mgb6rrk1U4ucxvVNXrWKW1cJ?usp=sharing',
  descUno: 'Imagen para escanear',urlImgUno: 'assets/proyectos/ra/img1.JPG',
  descDos: 'Imagen en Unity',urlImgDos: 'assets/proyectos/ra/img2.JPG',
  descTres: 'Incorporación del modelo 3D para escanear',urlImgTres: 'assets/proyectos/ra/img3.JPG',
  descCuatro: 'Ejecución del proyecto',urlImgCuatro: 'assets/proyectos/ra/img4.JPG',},

  {url: 'assets/proyectos/oa/img1.JPG', nombre: 'Objeto de Aprendizaje', descripcion: 'Objeto de aprendizaje realizado para la asignatura de “Entornos virtuales de aprendiza” mediante el uso de HTML, CSS y JavaScript. El proyecto permite a los estudiantes aprender sobre los ciclos de repetición en el leguaje de programación C++.', urlProyecto: 'https://juanrc03.github.io/Objeto-de-Aprendizaje/',
  descUno: 'Pantlla de inicio',urlImgUno: 'assets/proyectos/oa/img1.JPG',
  descDos: 'Contendio del objeto de aprendizaje',urlImgDos: 'assets/proyectos/oa/img2.JPG',
  descTres: 'Actividades del objeto de aprendizaje',urlImgTres: 'assets/proyectos/oa/img3.JPG',
  descCuatro: 'Autoevaluación',urlImgCuatro: 'assets/proyectos/oa/img4.JPG',},

  {url: 'assets/proyectos/salud/img1.JPG', nombre: 'Nutrisionista', descripcion: 'El proyecto fue desarrollado en Visual Studio utilizando el lenguaje de programación C#. Este programa tiene como objetivo principal gestionar de manera eficiente a los usuarios y mantener un registro detallado de su estado de salud. Para lograr esto, se ofrece la capacidad de generar informes de salud basados en datos como peso y talla, lo que proporciona una visión completa de la condición de los usuarios.', urlProyecto: 'https://github.com/JuanRC03/salud',
  descUno: 'Pantlla de inicio',urlImgUno: 'assets/proyectos/salud/img1.JPG',
  descDos: 'Registro de usuarios',urlImgDos: 'assets/proyectos/salud/img2.JPG',
  descTres: 'Busqueda de usuarios',urlImgTres: 'assets/proyectos/salud/img3.JPG',
  descCuatro: 'Información de alimentos requeridos por edad',urlImgCuatro: 'assets/proyectos/salud/img4.JPG',},
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
  constructor(public dialog: MatDialog) {}
  dataSourceProyectos = PROYECTOS_DATA;
  ngAfterViewInit(): void {
    const swiper = new Swiper('.portfolio__container', {
      cssMode: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {}

  openDialogImagenes(nombreProy,desc,desUno,urImgUno,desDos,urImgDos,desTres,urImgTres,desCuatro,urImgCuatro): void {
    const dialogRef = this.dialog.open(DialogImagenes, {
      data: { nombreProyecto:nombreProy,descripcion:desc, 
        descUno:desUno,urlImgUno: urImgUno,
        descDos:desDos, urlImgDos:urImgDos, 
        descTres:desTres,urlImgTres:urImgTres, 
        descCuatro:desCuatro,urlImgCuatro:urImgCuatro},
    });
  }
}

interface DatosImagenes {
  nombreProyecto: '',descripcion: '',
  descUno: '',urlImgUno: '',
  descDos: '',urlImgDos: '',
  descTres: '',urlImgTres: '',
  descCuatro: '',urlImgCuatro: '',
}



@Component({
selector: 'portfolio-imagenes',
templateUrl: 'portfolio-imagenes.html',
styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogImagenes {
constructor(
  public dialogRef: MatDialogRef<DialogImagenes>,
  @Inject(MAT_DIALOG_DATA) public datos: DatosImagenes,
) { }

onNoClick(): void {
  this.dialogRef.close();
}

investigacion: any = [];

data = {
  urlImg: '',
}

nombreProyecto:any;
descripcion:any;
modelo: any = {
  urlsImagenes: []
};

ngOnInit(): void {
  this.modelo.urlsImagenes = [];
  const datosImagen1: any = {
    desc: '',
    url: '',
  }
  const datosImagen2: any = {
    desc: '',
    url: '',
  }
  const datosImagen3: any = {
    desc: '',
    url: '',
  }
  const datosImagen4: any = {
    desc: '',
    url: '',
  }
  
  datosImagen1.desc=this.datos.descUno;
  datosImagen1.url=this.datos.urlImgUno;
  this.modelo.urlsImagenes.push(datosImagen1);
  datosImagen2.desc=this.datos.descDos;
  datosImagen2.url=this.datos.urlImgDos;
  this.modelo.urlsImagenes.push(datosImagen2);
  datosImagen3.desc=this.datos.descTres;
  datosImagen3.url=this.datos.urlImgTres;
  this.modelo.urlsImagenes.push(datosImagen3);
  datosImagen4.desc=this.datos.descCuatro;
  datosImagen4.url=this.datos.urlImgCuatro;
  this.modelo.urlsImagenes.push(datosImagen4);
}
}
