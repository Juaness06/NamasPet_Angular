import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorAgregarMascotaComponent } from './administrador-agregar-mascota.component';

describe('AdministradorAgregarMascotaComponent', () => {
  let component: AdministradorAgregarMascotaComponent;
  let fixture: ComponentFixture<AdministradorAgregarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorAgregarMascotaComponent]
    });
    fixture = TestBed.createComponent(AdministradorAgregarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
