import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorVerMascotaClienteComponent } from './administrador-ver-mascota-cliente.component';

describe('AdministradorVerMascotaClienteComponent', () => {
  let component: AdministradorVerMascotaClienteComponent;
  let fixture: ComponentFixture<AdministradorVerMascotaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorVerMascotaClienteComponent]
    });
    fixture = TestBed.createComponent(AdministradorVerMascotaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
