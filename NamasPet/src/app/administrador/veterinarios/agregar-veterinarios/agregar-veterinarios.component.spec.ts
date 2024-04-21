import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVeterinariosComponent } from './agregar-veterinarios.component';

describe('AgregarVeterinariosComponent', () => {
  let component: AgregarVeterinariosComponent;
  let fixture: ComponentFixture<AgregarVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVeterinariosComponent]
    });
    fixture = TestBed.createComponent(AgregarVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
