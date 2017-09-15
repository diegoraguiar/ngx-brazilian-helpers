import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CpfValidatorDirective } from './cpf.directive';
import { CnpjValidatorDirective } from './cnpj.directive';
import { NitDirective } from './nit.directive';

@NgModule({
  declarations: [
    CpfValidatorDirective,
    CnpjValidatorDirective,
    NitDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfValidatorDirective,
    CnpjValidatorDirective,
    NitDirective
  ]
})
export class ValidatorsModule { }
