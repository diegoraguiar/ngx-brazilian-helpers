import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { InscricaoEstadualDirective } from './inscricao-estadual.directive';

@Component({
  template: `
    <form #form="ngForm">
        <input
          type="text"
          id="inscricaoEstadual"
          name="inscricaoEstadual"
          [(ngModel)]="inscricaoEstadual"
          inscricaoEstadual>
    </form>
  `
})
class TestComponent {
  @ViewChild('form')
  form: NgForm;

  inscricaoEstadual: string;
}

describe('directive: InscricaoEstadualDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, InscricaoEstadualDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(InscricaoEstadualDirective));

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

});

@Component({
  template: `
    <form #form="ngForm">
        <input
          type="text"
          id="inscricaoEstadual"
          name="inscricaoEstadual"
          [(ngModel)]="inscricaoEstadual"
          inscricaoEstadual="AC">
    </form>
  `
})
class TestAcreComponent {
  @ViewChild('form')
  form: NgForm;

  inscricaoEstadual: string;
}

describe('directive: InscricaoEstadualDirective - Acre', () => {

  let component: TestAcreComponent;
  let fixture: ComponentFixture<TestAcreComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestAcreComponent, InscricaoEstadualDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAcreComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(InscricaoEstadualDirective));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('formulario deve estar valido quando inscricao estadual está correta', async(() => {
    component.inscricaoEstadual = '0109070380074';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar invalido quando inscricao estadual está incorreta', async(() => {
    component.inscricaoEstadual = '01090703';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
      expect(component.form.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});

@Component({
  template: `
    <form #form="ngForm">
        <input
          type="text"
          id="inscricaoEstadual"
          name="inscricaoEstadual"
          [(ngModel)]="inscricaoEstadual"
          inscricaoEstadual="RJ">
    </form>
  `
})
class TestRioDeJaneiroComponent {
  @ViewChild('form')
  form: NgForm;

  inscricaoEstadual: string;
}

describe('directive: InscricaoEstadualDirective - Rio de Janeiro', () => {

  let component: TestRioDeJaneiroComponent;
  let fixture: ComponentFixture<TestRioDeJaneiroComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestRioDeJaneiroComponent, InscricaoEstadualDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRioDeJaneiroComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(InscricaoEstadualDirective));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('formulario deve estar valido quando inscricao estadual está correta', async(() => {
    component.inscricaoEstadual = '54080336';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar invalido quando inscricao estadual está incorreta', async(() => {
    component.inscricaoEstadual = '01090703';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
      expect(component.form.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});

@Component({
  template: `
    <form #form="ngForm">
        <input
          type="text"
          id="inscricaoEstadual"
          name="inscricaoEstadual"
          [(ngModel)]="inscricaoEstadual"
          inscricaoEstadual="XX">
    </form>
  `
})
class TestXXComponent {
  @ViewChild('form')
  form: NgForm;

  inscricaoEstadual: string;
}

describe('directive: InscricaoEstadualDirective - Estado que não existe', () => {

  let component: TestXXComponent;
  let fixture: ComponentFixture<TestXXComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestXXComponent, InscricaoEstadualDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXXComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(InscricaoEstadualDirective));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('formulario deve estar invalido', async(() => {
    component.inscricaoEstadual = '54080336';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
      expect(component.form.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});
