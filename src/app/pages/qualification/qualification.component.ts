import { Component, OnInit } from '@angular/core';

export interface ModeloElement {
  nombreIzquierdo: string;
  institucionIzquierdo: string;
  periodoIzquierdo: string;
  nombreDerecho: string;
  institucionDerecho: string;
  periodoDerecho: string;
}

const EDUACION_DATA: ModeloElement[] = [
  {nombreIzquierdo: 'Tecnología en electromecánica automotriz', institucionIzquierdo: 'Eduador - Instituto Tecnológico Superior "Ramón Barba Naranjo', periodoIzquierdo: '2013 - 2016', nombreDerecho: 'Licencia Profesional Tipo C', institucionDerecho:'Eduador - Sindicato de choferes profesionales del cantón Saquisilí', periodoDerecho:'2017 - 2018'},
  {nombreIzquierdo: 'Ingeniería de software', institucionIzquierdo: 'Eduador - Escuela Superior Politécnica de Chimborazo', periodoIzquierdo: '2018 - 2023', nombreDerecho: '', institucionDerecho:'', periodoDerecho:''},
];

const TRABAJO_DATA: ModeloElement[] = [
  {nombreIzquierdo: 'Desarollador', institucionIzquierdo: 'Eduador - ClickeArte', periodoIzquierdo: '2022 - 2023', nombreDerecho: '', institucionDerecho:'', periodoDerecho:''},
];

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  public openList = 'educacion';

  dataSourceEducacion = EDUACION_DATA;
  dataSourceTrabajo = TRABAJO_DATA;

  constructor() {}

  ngOnInit(): void {}
  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
