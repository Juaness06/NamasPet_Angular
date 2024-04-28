import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorEditarClienteComponent } from './administrador-editar-cliente.component';

describe('AdministradorEditarClienteComponent', () => {
  let component: AdministradorEditarClienteComponent;
  let fixture: ComponentFixture<AdministradorEditarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorEditarClienteComponent]
    });
    fixture = TestBed.createComponent(AdministradorEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
