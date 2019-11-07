import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalTransporteService {

  private modalTransportesURl = `${environment.baseUrl}/modalTransportes`;

  constructor(private http: HttpClient) { }

  public buscarTodos(): Promise<any> {
    return this.http.get(this.modalTransportesURl).toPromise()
        .then(response => {
            return response;
        });
  }

}
