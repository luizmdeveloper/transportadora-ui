import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Transportador } from '../core/modelo';

@Injectable({
  providedIn: 'root'
})
export class TransportadorService {

  private transportadorUrl = `${environment}/transportadores`;

  constructor(private http: HttpClient) { }

  public filtrar() {}

  public salvar(transportador: Transportador): Promise<Transportador> {
    return this.http.post(this.transportadorUrl, transportador).toPromise()
              .then(response => {
                    return response as Transportador;
              });
  }

  public alterar(codigo: number, transportador: Transportador): Promise<Transportador> {
    return this.http.put(`${this.transportadorUrl}/${codigo}`, transportador).toPromise()
              .then(response => {
                    return response as Transportador;
              });
  }

  public exlcuir(codigo: number): Promise<void> {
    return this.http.delete(`${this.transportadorUrl}/${codigo}`).toPromise().then(() => null);
  }

  public buscarPorCodigo(codigo: number): Promise<Transportador> {
    return this.http.get(`${this.transportadorUrl}/${codigo}`).toPromise()
              .then(response => {
                    return response as Transportador;
              });
  }

}
