import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayUnError: boolean = false;
  paises:Pais[] = [];
  constructor(private readonly _paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ): void {
    
    this.hayUnError = false;
    this.termino = termino;
      this._paisService.buscarUnPais( this.termino ).subscribe( (data) => {
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
