import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';

const Componentes = [
  ButtonComponent
]

const Modulos = [
  CommonModule,
  FormsModule,
  IonicModule,
  ReactiveFormsModule
]


@NgModule({
  declarations: [... Componentes],
  imports: [
    ... Modulos
  ],
  exports: [... Modulos, ... Componentes]
})
export class SharedModule { }
