import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { RenavamDirective } from './renavam.directive';

@Component({
  template: `
    <form #form="ngForm">
        <input
          type="text"
          id="renavam"
          name="renavam"
          [(ngModel)]="renavam"
          renavam>
    </form>
  `
})
class TestComponent {

  @ViewChild('form')
  form: NgForm;

  renavam: string;
}

describe('directive: RenavamDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, RenavamDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(RenavamDirective));

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

  it('formulario deve estar invalido quando renavam está incorreto', async(() => {
    component.renavam = '123456';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
      expect(component.form.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando renavam está correto', async(() => {
    component.renavam = '94494225864';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando renavam não foi informado', async(() => {
    component.renavam = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando renavam for nulo', async(() => {
    component.renavam = null;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando renavam for undefined', async(() => {
    component.renavam = undefined;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));
});
