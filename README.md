# ngx-brazilian-helpers

[![npm version](https://badge.fury.io/js/ngx-brazilian-helpers.svg)](https://badge.fury.io/js/ngx-brazilian-helpers) [![Build Status](https://travis-ci.org/diegoraguiar/ngx-brazilian-helpers.svg?branch=master)](https://travis-ci.org/diegoraguiar/ngx-brazilian-helpers) [![Coverage Status](https://coveralls.io/repos/github/diegoraguiar/ngx-brazilian-helpers/badge.svg?branch=master)](https://coveralls.io/github/diegoraguiar/ngx-brazilian-helpers?branch=master) [![Lines of Code](https://sonarcloud.io/api/badges/measure?key=ngx-brazilian-helpers&metric=ncloc)](https://sonarcloud.io/dashboard?id=ngx-brazilian-helpers) [![Bugs](https://sonarcloud.io/api/badges/measure?key=ngx-brazilian-helpers&metric=bugs)](https://sonarcloud.io/dashboard?id=ngx-brazilian-helpers) [![Vulnerabilities](https://sonarcloud.io/api/badges/measure?key=ngx-brazilian-helpers&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ngx-brazilian-helpers)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Usage](#usage)

# Getting Started

`ngx-brazilian-helpers` is the easiest way to validate brazilian documents in angular forms. Following the available validators:

1. **CPF**
2. **CNPJ**
3. **NIT (PIS/PASEP)**
3. **Renavam**
4. **Titulo de Eleitor**
5. **Inscrição Estadual**
6. **CNS (Carteira Nacional de Saúde)**

## Usage
Install `ngx-brazilian-helpers` via `npm`:
```shell
npm install ngx-brazilian-helpers --save
```

Import in your `app.module.ts` or any module you want to use it:
```ts
import { ValidatorsModule } from 'ngx-brazilian-helpers';

@NgModule({
  imports: [
    ValidatorsModule.forRoot()
  ]
})
```

Using it:
```html
<input id="yourId" name="yourName" ngModel cpf>
or
<input [formControl]='yourControl' cpf>
or
<input formControlName='yourControlName' cpf>
```


