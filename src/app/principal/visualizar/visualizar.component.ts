import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  carros = [
    {
      nome: 'Ford',
      marca: 'Fusion'
    },
    {
      nome: 'Volkswagen',
      marca: 'Virtus'
    },
    {
      nome: 'Hyundai',
      marca: 'Azera'
    },
    {
      nome: 'Volkswagen',
      marca: 'Jetta'
    },
    {
      nome: 'Ford',
      marca: 'Focus'
    }
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
