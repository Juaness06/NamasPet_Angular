import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorEditarMascotaComponent } from './administrador-editar-mascota.component';

describe('AdministradorEditarMascotaComponent', () => {
  let component: AdministradorEditarMascotaComponent;
  let fixture: ComponentFixture<AdministradorEditarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorEditarMascotaComponent]
    });
    fixture = TestBed.createComponent(AdministradorEditarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
