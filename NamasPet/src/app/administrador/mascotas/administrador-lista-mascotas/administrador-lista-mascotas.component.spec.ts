import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorListaMascotasComponent } from './administrador-lista-mascotas.component';

describe('AdministradorListaMascotasComponent', () => {
  let component: AdministradorListaMascotasComponent;
  let fixture: ComponentFixture<AdministradorListaMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorListaMascotasComponent]
    });
    fixture = TestBed.createComponent(AdministradorListaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
