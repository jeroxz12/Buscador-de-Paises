import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, takeWhile, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Pais[];
  constructor(private activatedRoute: ActivatedRoute,private paisService:PaisService) { 
    
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe( ({ id }) => {
        this.paisService.getPaisPorCodigo( id ).subscribe( (pais) => {
            this.pais = pais;
            console.log(pais);
          })
      });

      // this.activatedRoute.params
      //   .pipe(
      //     switchMap( ({ id }) => 
      //       this.paisService.getPaisPorCodigo( id )
      //      ), tap( console.log )
      //   )
      //   .subscribe( pais => {
      //     if(pais !== 'undefined'){
      //       this.pais = pais;
      //     }
      //     })

  }

}
