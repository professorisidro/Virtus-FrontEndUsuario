import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paroquia } from 'src/app/model/Paroquia';
import { ParoquiasService } from 'src/app/servicos/paroquias.service';

@Component({
  selector: 'app-detalheparoquia',
  templateUrl: './detalheparoquia.component.html',
  styleUrls: ['./detalheparoquia.component.css']
})
export class DetalheparoquiaComponent implements OnInit {

  public idParoquia: number;
  public paroquia: Paroquia = new Paroquia();

  constructor(private router: ActivatedRoute, private paroquiaService: ParoquiasService) {
    let strId = this.router.snapshot.params['id'];
    this.idParoquia = parseInt(strId);
    this.paroquiaService.recuperarDetalhesDaParoquia(this.idParoquia).subscribe(
      (res: Paroquia) => { this.paroquia = res },
      (err: any) => { alert("Erro ao recuperar detalhes da paroquia!") }
    );
  }

  ngOnInit(): void {
  }

}
