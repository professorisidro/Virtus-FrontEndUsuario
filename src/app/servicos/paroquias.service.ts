import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginaParoquias } from '../model/PaginaParoquias';
import { Paroquia } from '../model/Paroquia';

@Injectable({
  providedIn: 'root'
})
export class ParoquiasService {

  constructor(private http: HttpClient) { }

  public recuperarParoquiasPorCidade(idCidade: number, pagina:number): Observable<PaginaParoquias>{
    return this.http.get<PaginaParoquias>(environment.apiURL+"/paroquias?cidade="+idCidade+"&page="+pagina);
  }

  public recuperarDetalhesDaParoquia(idParoquia: number):Observable<Paroquia>{
    return this.http.get<Paroquia>(environment.apiURL+"/paroquias/"+idParoquia);

  }
}
