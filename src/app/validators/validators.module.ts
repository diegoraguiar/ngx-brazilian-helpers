import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CpfDirective } from './cpf.directive';
import { CnpjDirective } from './cnpj.directive';
import { NitDirective } from './nit.directive';
import { RenavamDirective } from './renavam.directive';

@NgModule({
  declarations: [
    CpfDirective,
    CnpjDirective,
    NitDirective,
    RenavamDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfDirective,
    CnpjDirective,
    NitDirective
  ]
})
export class ValidatorsModule { }
