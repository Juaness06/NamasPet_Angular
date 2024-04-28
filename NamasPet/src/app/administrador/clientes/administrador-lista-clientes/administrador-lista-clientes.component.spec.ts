import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorListaClientesComponent } from './administrador-lista-clientes.component';

describe('AdministradorListaClientesComponent', () => {
  let component: AdministradorListaClientesComponent;
  let fixture: ComponentFixture<AdministradorListaClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorListaClientesComponent]
    });
    fixture = TestBed.createComponent(AdministradorListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
