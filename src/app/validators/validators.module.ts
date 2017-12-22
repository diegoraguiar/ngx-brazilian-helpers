import { NgModule, ModuleWithProviders } from '@angular/core';

import { CpfDirective } from './cpf.directive';
import { CnpjDirective } from './cnpj.directive';
import { NitDirective } from './nit.directive';
import { RenavamDirective } from './renavam.directive';
import { TituloEleitorDirective } from './titulo-eleitor.directive';
import { InscricaoEstadualDirective } from './inscricao-estadual.directive';
import { CnsDirective } from './cns.directive';

@NgModule({
  declarations: [
    CpfDirective,
    CnpjDirective,
    NitDirective,
    RenavamDirective,
    TituloEleitorDirective,
    InscricaoEstadualDirective,
    CnsDirective
  ],
  exports: [
    CpfDirective,
    CnpjDirective,
    NitDirective,
    RenavamDirective,
    TituloEleitorDirective,
    InscricaoEstadualDirective,
    CnsDirective
  ]
})
export class ValidatorsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ValidatorsModule
    };
  }
}
