import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule, RouterModule
  ], exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
