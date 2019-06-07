import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-atividades',
  templateUrl: './nav-atividades.component.html',
  styleUrls: ['./nav-atividades.component.css']
})
export class NavAtividadesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

}
