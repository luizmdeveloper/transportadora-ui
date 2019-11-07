import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { Transportador } from '../../core/modelo';
import { ViaCepService } from '../../core/via-cep.service';
import { EstadoService } from '../../core/estado.service';
import { ModalTransporteService } from '../../modal-transporte/moda-transporte.service';
import { TransportadorService } from '../transportador.service';
import { ErroHandlerService } from './../../core/errohandler.service';
import { Title } from '@angular/platform-browser';

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
              private transportadorService: TransportadorService,
              private erroHandlerService: ErroHandlerService,
              private activatedRoute: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de transportador');

    this.transportador = new Transportador();

    const codigo = this.activatedRoute.snapshot.params['codigo'];

    if (codigo) {
      this.buscarTransportadorPorCodigo(codigo);
      this.title.setTitle('Edição de transportador');
    }

    this.buscarTodosEstados();
    this.buscarTodosModais();
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
    if (this.editando) {
      this.transportadorService.alterar(this.transportador.codigo, this.transportador)
        .then(resultado => {
          this.toasty.success('Transportador salvo com sucesso');
        })
        .catch(erro => this.erroHandlerService.handler(erro));
    } else {
      this.transportadorService.salvar(this.transportador)
        .then(resultado => {
          this.toasty.success('Transportador salvo com sucesso');
          formulario.reset();
          this.transportador = new Transportador();
        })
        .catch(erro => this.erroHandlerService.handler(erro));
      }
  }

  buscarTodosEstados() {
    this.estadoService.buscarTodos()
      .then(resultado => {
        resultado.forEach(estado => {
          this.estados.push(estado);
        });
      })
      .catch(erro => this.erroHandlerService.handler(erro));
  }

  buscarTodosModais() {
    this.modalTransporteService.buscarTodos()
      .then(modal => {
        this.modalTransportes.push(modal);
      })
      .catch(erro => this.erroHandlerService.handler(erro));
  }

  buscarTransportadorPorCodigo(codigo: number) {
    this.transportadorService.buscarPorCodigo(codigo)
      .then(resultado => {
          this.transportador = resultado;
      })
      .catch(erro => this.erroHandlerService.handler(erro));
  }
}
