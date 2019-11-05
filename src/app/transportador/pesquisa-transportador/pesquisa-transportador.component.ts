import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-transportador',
  templateUrl: './pesquisa-transportador.component.html',
  styleUrls: ['./pesquisa-transportador.component.css']
})
export class PesquisaTransportadorComponent implements OnInit {

  transportadores = [
    {
      codigo: 1,
      nome: 'Braspress Transportes Urgentes',
      telefone: '87 2101-9700',
      celular: '87 98841-6661',
      email: 'contato@braspress.com.br',
      whatsapp: '87 98841661'
    },
    {
      codigo: 2,
      nome: 'Transzape Transportes Rodoviários Ltda',
      telefone: '87 3863-2400',
      celular: '87 98841-6661',
      email: 'contato@transzapetransportes.com.br',
      whatsapp: '87 98841661'
    },
    {
      codigo: 3,
      nome: 'E3LOG Logistica',
      telefone: '74 3611-8520',
      celular: '87 98841-6661',
      email: 'entregas@e3log.com',
      whatsapp: '87 98841-661'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
