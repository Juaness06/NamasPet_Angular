import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorVerMascotasClienteComponent } from './administrador-ver-mascotas-cliente.component';

describe('AdministradorVerMascotasClienteComponent', () => {
  let component: AdministradorVerMascotasClienteComponent;
  let fixture: ComponentFixture<AdministradorVerMascotasClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorVerMascotasClienteComponent]
    });
    fixture = TestBed.createComponent(AdministradorVerMascotasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
