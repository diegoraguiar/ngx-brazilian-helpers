import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { TituloEleitorDirective } from './titulo-eleitor.directive';

@Component({
  template: `
    <form #form="ngForm">
        <input
          type="text"
          id="tituloEleitor"
          name="tituloEleitor"
          [(ngModel)]="tituloEleitor"
          tituloEleitor>
    </form>
  `
})
class TestComponent {

  @ViewChild('form')
  form: NgForm;

  tituloEleitor: string;
}

describe('directive: TituloEleitorDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, TituloEleitorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(TituloEleitorDirective));

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
    expect(component.form.valid).toBe(true);
    expect(component.form.invalid).toBe(false);
    expect(element).toBeTruthy();
  });

  it('formulario deve estar invalido quando tituloEleitor está incorreto', async(() => {
    component.tituloEleitor = '123456';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
      expect(component.form.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando tituloEleitor está correto', async(() => {
    component.tituloEleitor = '323877330280';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando tituloEleitor não foi informado', async(() => {
    component.tituloEleitor = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando tituloEleitor for nulo', async(() => {
    component.tituloEleitor = null;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando tituloEleitor for undefined', async(() => {
    component.tituloEleitor = undefined;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));
});

