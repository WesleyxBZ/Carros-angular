import {HttpClient, HttpHeaders} from '@angular/common/http';

export class AbstractService {

  public headers: HttpHeaders;
  protected http: HttpClient;

  private readonly API_URL = '200.132.36.170';
  private readonly API_PORT = '9080';
  private readonly API_NAME = 'carrosws';

  public readonly API_REST = `http://${this.API_URL}:${this.API_PORT}/${this.API_NAME}`;

  constructor(http: HttpClient) {
    this.http = http;
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

}
