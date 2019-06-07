import {Component, OnInit} from '@angular/core';
import {Carro} from '../../core/model/carro.model';
import {CarroService} from '../../core/service/carro.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  carros: Carro[];

  constructor(private carroService: CarroService) {
    this.carros = [];
  }

  ngOnInit() {
    this.carroService.findAll().subscribe(carros => {
      if (carros) {
        this.carros = carros;
      }
    });
  }

}
