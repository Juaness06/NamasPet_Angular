import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTratamientosComponent } from './agregar-tratamientos.component';

describe('AgregarTratamientosComponent', () => {
  let component: AgregarTratamientosComponent;
  let fixture: ComponentFixture<AgregarTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarTratamientosComponent]
    });
    fixture = TestBed.createComponent(AgregarTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
