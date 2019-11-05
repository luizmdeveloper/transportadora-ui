import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private estadoURl = `${environment}/estados`;

  constructor(private http: HttpClient) { }

  public buscarTodos(): Promise<any> {
    return this.http.get(this.estadoURl).toPromise()
      .then(response => {
        return response;
      });
  }
}
