import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CpfDirective } from './cpf.directive';
import { CnpjDirective } from './cnpj.directive';
import { NitDirective } from './nit.directive';
import { RenavamDirective } from './renavam.directive';
import { TituloEleitorDirective } from './titulo-eleitor.directive';

@NgModule({
  declarations: [
    CpfDirective,
    CnpjDirective,
    NitDirective,
    RenavamDirective,
    TituloEleitorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfDirective,
    CnpjDirective,
    NitDirective,
    RenavamDirective,
    TituloEleitorDirective
  ]
})
export class ValidatorsModule { }
