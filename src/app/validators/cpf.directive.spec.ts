import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { CpfValidatorDirective } from './cpf.directive';

describe('class: CpfValidatorDirective', () => {

  let directive: CpfValidatorDirective;

  beforeEach(() => {
    directive = new CpfValidatorDirective();
  });

  it('deve criar uma instacia', () => {
    expect(directive).toBeTruthy();
  });

  it('deve estar valido', () => {
    let isCpfValido: boolean;

    isCpfValido = directive.validarCpf('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = directive.validarCpf('55266055901');
    expect(isCpfValido).toBe(true);
  });

  it('deve possuir 11 algarismos', () => {
    let isCpfValido: boolean;

    isCpfValido = directive.validarCpf('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = directive.validarCpf('1111111111');
    expect(isCpfValido).toBe(false);

    isCpfValido = directive.validarCpf('111111111111');
    expect(isCpfValido).toBe(false);
  });

  it('deve possuir pelo menos 1 algarismo diferente', () => {
    let isCpfValido: boolean;

    isCpfValido = directive.validarCpf('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = directive.validarCpf('11111111111');
    expect(isCpfValido).toBe(false);
  });

  it('deve estar com o primeiro digito verificador valido', () => {
    let isCpfValido: boolean;

    isCpfValido = directive.validarCpf('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = directive.validarCpf('72525457511');
    expect(isCpfValido).toBe(false);
  });

  it('deve estar com o segundo digito verificador valido', () => {
    let isCpfValido: boolean;

    isCpfValido = directive.validarCpf('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = directive.validarCpf('72525457511');
    expect(isCpfValido).toBe(false);
  });

  it('deve estar valido quando estiver mascarado', () => {
    let isCpfValido: boolean;

    isCpfValido = directive.validarCpf('725.254.575-01');
    expect(isCpfValido).toBe(true);
  });

});

@Component({
  template: `
    <form #formCpf="ngForm">
        <input
          type="text"
          id="cpf"
          name="cpf"
          [(ngModel)]="cpf"
          cpf>
    </form>
  `
})
class TestComponent {
  @ViewChild('formCpf')
  formCpf: NgForm;

  cpf: string;
}

describe('directive: CpfValidatorDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, CpfValidatorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(CpfValidatorDirective));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('componente deve ter a instancia criada', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });

  it('formulario deve estar valido assim que inicia', () => {
    expect(component.formCpf.valid).toBe(true);
    expect(component.formCpf.invalid).toBe(false);
    expect(element).toBeTruthy();
  });

  it('formulario deve estar invalido quando cpf está incorreto', async(() => {
    component.cpf = '123456';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCpf.invalid).toBe(true);
      expect(component.formCpf.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cpf está correto', async(() => {
    component.cpf = '13821438690';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCpf.valid).toBe(true);
      expect(component.formCpf.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cpf não foi informado', async(() => {
    component.cpf = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCpf.valid).toBe(true);
      expect(component.formCpf.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cpf for nulo', async(() => {
    component.cpf = null;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCpf.valid).toBe(true);
      expect(component.formCpf.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cpf for undefined', async(() => {
    component.cpf = undefined;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCpf.valid).toBe(true);
      expect(component.formCpf.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});
