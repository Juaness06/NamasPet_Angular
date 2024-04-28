import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorVerMascotaComponent } from './administrador-ver-mascota.component';

describe('AdministradorVerMascotaComponent', () => {
  let component: AdministradorVerMascotaComponent;
  let fixture: ComponentFixture<AdministradorVerMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorVerMascotaComponent]
    });
    fixture = TestBed.createComponent(AdministradorVerMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
