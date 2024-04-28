import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorAgregarClienteComponent } from './administrador-agregar-cliente.component';

describe('AdministradorAgregarClienteComponent', () => {
  let component: AdministradorAgregarClienteComponent;
  let fixture: ComponentFixture<AdministradorAgregarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorAgregarClienteComponent]
    });
    fixture = TestBed.createComponent(AdministradorAgregarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
