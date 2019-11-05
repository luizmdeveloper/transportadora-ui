import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastyService } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class ErroHandlerService {

  constructor(private toasty: ToastyService) { }

  public handler(erro: HttpErrorResponse) {
    let mensagem = '';

    if (typeof erro === 'string') {
      mensagem = erro;
    } else if (erro instanceof HttpErrorResponse &&
               erro.status >= 400 && erro.status <= 499) {
        mensagem = 'Ocorreu um erro ao processar a sua solicitação';

        try {
          erro.error.forEach(mensagemErro => {
            mensagem += mensagemErro.mensagemUSuario + '\n';
          });
        } catch (e) { }

    } else {
      mensagem = 'Erro ao processar serviço remoto. Tente novamente.';
    }

    this.toasty.error(mensagem);
  }
}
