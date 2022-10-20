import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { PorContinenteComponent } from './paises/pages/por-continente/por-continente.component';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [{ path: '', component: PorPaisComponent, pathMatch: 'full' }
  , { path: 'continente', component: PorContinenteComponent },
{ path: 'capital', component: PorCapitalComponent },
{ path: 'pais/:id', component: VerPaisComponent },
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
