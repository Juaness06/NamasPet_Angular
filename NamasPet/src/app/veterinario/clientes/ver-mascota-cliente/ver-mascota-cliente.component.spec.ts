import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMascotaClienteComponent } from './ver-mascota-cliente.component';

describe('VerMascotaClienteComponent', () => {
  let component: VerMascotaClienteComponent;
  let fixture: ComponentFixture<VerMascotaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerMascotaClienteComponent]
    });
    fixture = TestBed.createComponent(VerMascotaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
