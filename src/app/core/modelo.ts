export class ModalTransporte {
  codigo: number = 0;
  nome: string;
}

export class Endereco {
  cep: number;
  estado: string = '';
  cidade: string;
  bairro: string;
  endereco: string;
  numero: string;
}

export class Contato {
  telefone: string;
  celular: string;
  whatsapp: string;
}

export class Transportador {
  codigo: number;
  nome: string;
  email: string;
  endereco = new Endereco();
  contato = new Contato();
  modalTransporte = new ModalTransporte();
  foto: string;
}
