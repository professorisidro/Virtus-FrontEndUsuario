import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginaParoquias } from 'src/app/model/PaginaParoquias';
import { ParoquiasService } from 'src/app/servicos/paroquias.service';

@Component({
  selector: 'app-listaparoquias',
  templateUrl: './listaparoquias.component.html',
  styleUrls: ['./listaparoquias.component.css']
})
export class ListaparoquiasComponent implements OnInit {

  public idCidade: number;
  public page: number;
  public paginaParoquia: PaginaParoquias = new PaginaParoquias();

  public paginaAtual: number;
  public paginaAnterior: number;
  public proximaPagina: number;

  constructor(private paroquiaService: ParoquiasService,
    private activeRoute: ActivatedRoute) {
    let strPage = this.activeRoute.snapshot.queryParams['page'];
    let strId = this.activeRoute.snapshot.params['id'];
    this.idCidade = parseInt(strId);
    if (strPage != null) {
      this.page = parseInt(strPage);
    }
    else {
      this.page = 0;
    }
  }

  ngOnInit(): void {
    this.recuperarPagina(this.page);
  }

  public recuperarPagina(numeroPagina: number) {

    console.log("Estou na pagina numero " + this.page);

    this.paroquiaService.recuperarParoquiasPorCidade(this.idCidade, numeroPagina).subscribe(
      (res: PaginaParoquias) => {
        this.paginaParoquia = res;
        console.log(this.paginaParoquia);
        this.paginaAnterior = this.paginaParoquia.number - 1;
        this.paginaAtual = this.paginaParoquia.number;
        this.proximaPagina = this.paginaParoquia.number + 1;
      },
      (err: any) => { alert("Erro ao recuperar lista de paróquias"); }
    );

  }

}
