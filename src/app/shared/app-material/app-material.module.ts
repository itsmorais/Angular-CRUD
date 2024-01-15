import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';


@NgModule({
 exports:[
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  CommonModule

],
})
export class AppMaterialModule { }
