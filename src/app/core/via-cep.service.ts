import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  buscaCEPURL = environment.viaCepURL;

  constructor(private http: HttpClient) { }

  public buscarCEP(cep: number): Promise<any> {
    let codigo_cep = cep.toString().replace('-', '');
    codigo_cep = codigo_cep.toString().replace('.', '');
    return this.http.get(`${this.buscaCEPURL}/${codigo_cep}/json`).toPromise()
              .then(response => {
                return response;
              });
  }


}
