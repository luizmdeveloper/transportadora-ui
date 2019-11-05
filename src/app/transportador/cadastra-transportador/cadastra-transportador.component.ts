import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';
import { Transportador } from '../../core/modelo';
import { ViaCepService } from '../../core/via-cep.service';
import { EstadoService } from '../../core/estado.service';
import { ModalTransporteService } from '../../modal-transporte/moda-transporte.service';
import { TransportadorService } from '../transportador.service';

@Component({
  selector: 'app-cadastra-transportador',
  templateUrl: './cadastra-transportador.component.html',
  styleUrls: ['./cadastra-transportador.component.css']
})
export class CadastraTransportadorComponent implements OnInit {

  private estados = [ {sigla: '', nome: 'Selecione um estado'} ];
  private modalTransportes = [ {codigo: 0, descricao: 'Selecione o modal'} ];
  private transportador: Transportador;

  constructor(private viaCEPService: ViaCepService,
              private estadoService: EstadoService,
              private modalTransporteService: ModalTransporteService,
              private toasty: ToastyService,
              private transportadorService: TransportadorService) { }

  ngOnInit() {
    this.transportador = new Transportador();
  }

  get editando() {
    return Boolean(this.transportador.codigo);
  }

  buscarCEP() {
    this.viaCEPService.buscarCEP(this.transportador.endereco.cep)
          .then(resultado => {
            this.transportador.endereco.estado = resultado.uf;
            this.transportador.endereco.cidade = resultado.localidade;
            this.transportador.endereco.endereco = resultado.logradouro;
            this.transportador.endereco.bairro = resultado.bairro;
          });
  }

  salvar(formulario: FormControl) {
    console.log(this.transportador);
  }
}
