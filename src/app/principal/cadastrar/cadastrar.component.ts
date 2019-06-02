import {Component, OnInit} from '@angular/core';
import {CarroService} from '../../core/service/carro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private carroService: CarroService) {
  }

  ngOnInit() {
  }

}
