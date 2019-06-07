import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Carro} from '../model/carro.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CarroService extends AbstractService {

  constructor(http: HttpClient) {
    super(http);
  }

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API_REST + '/carro/angular');
  }

  save(carro: Carro): Observable<boolean> {
    return this.http.post<boolean>(this.API_REST + '/carro/angular', carro);
  }

}
