import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CpfValidatorDirective } from './cpf.directive';
import { CnpjValidatorDirective } from './cnpj.directive';

@NgModule({
  declarations: [
    CpfValidatorDirective,
    CnpjValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfValidatorDirective,
    CnpjValidatorDirective
  ]
})
export class ValidatorsModule { }
