import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Transportador } from '../core/modelo';
import { TransportadorFiltro } from '../core/filtro';

@Injectable({
  providedIn: 'root'
})
export class TransportadorService {

  private transportadorUrl = `${environment.baseUrl}/transportadores`;

  constructor(private http: HttpClient) { }

  public buscarTodos(filtro: TransportadorFiltro): Promise<any> {
    let params = new HttpParams();

    if (filtro.cidade) {
      params = params.set('cidade', filtro.cidade);
    }

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.estado) {
      params = params.set('estado', filtro.estado);
    }

    if (filtro.modal) {
      params = params.set('modal', filtro.modal.toString());
    }

    return this.http.get(`${this.transportadorUrl}`, { params }).toPromise()
            .then(response => {
              return response;
            });
  }

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
