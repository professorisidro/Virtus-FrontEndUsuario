import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/model/Cidade';
import { Estado } from 'src/app/model/Estado';
import { CidadesService } from 'src/app/servicos/cidades.service';
import { EstadosService } from 'src/app/servicos/estados.service';

@Component({
  selector: 'app-formulariobusca',
  templateUrl: './formulariobusca.component.html',
  styleUrls: ['./formulariobusca.component.css']
})
export class FormulariobuscaComponent implements OnInit {

  public listaEstados: Estado[] = [];
  public listaCidades: Cidade[] = [];
  public idEstado: number = 0 ;
  public idCidade: number = 0;
  constructor(private estadoService: EstadosService,
              private cidadeService: CidadesService,
              private router: Router) { }

  ngOnInit(): void {
    this.estadoService.getAllEstados().subscribe(
      (res: Estado[]) => {
        this.listaEstados = res;
      },
      (err: any) => {alert("Erro ao recuperar lista de estados");}
    );
  }

  public buscaCidades(){
    this.cidadeService.getCidadesPorEstado(this.idEstado).subscribe(
      (res: Cidade[]) => {
        this.listaCidades = res;
      },
      (err: any) => {alert("Erro ao recuperar lista de cidades");}
    );
   

  }

  public buscarParoquias(){
    this.router.navigate(['listaparoquias',this.idCidade]);
  }

}
