import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayUnError: boolean = false;
  paises:Pais[] = [];

  
  constructor(private readonly _paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ): void {
    this.hayUnError = false;
    this.termino = termino;
      this._paisService.buscarUnPaisPorCapital( this.termino ).subscribe( (data) => {
        console.log(data);
        this.paises =  data;
      }, ( error ) => {
        this.hayUnError = true;
        this.paises = [];
      } );  
  }

  sugerencias( sugerencia: string){
    this.hayUnError = false;
  }

}
