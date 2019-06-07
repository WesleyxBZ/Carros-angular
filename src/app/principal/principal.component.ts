import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../shared-utils/animations/fade-in.animations';

@Component({
  templateUrl: './principal.component.html',
  animations: [fadeInAnimation]
})
export class PrincipalComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
  }
}
