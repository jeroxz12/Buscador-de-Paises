import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http:HttpClient) { }

  buscarUnPais(termino: string):Observable<Pais[]> {

    const URL = `${ this.apiUrl }/name/${ termino }`

    return this.http.get<Pais[]>(URL);
          
  }

  buscarUnPaisPorCapital( termino: string ):Observable<Pais[]>{
    const URL = `${ this.apiUrl }/capital/${ termino }`
    return this.http.get<Pais[]>(URL);
  }

  buscarUnPaisPorContinente( termino: string ):Observable<Pais[]>{
    const URL = `${ this.apiUrl }/region/${ termino }`
    return this.http.get<Pais[]>(URL);
  }

  getPaisPorCodigo( codigo:string ):Observable<Pais[]>{
    const URL = `${ this.apiUrl }/alpha/${ codigo }`;
    return this.http.get<Pais[]>(URL);
  }

}
