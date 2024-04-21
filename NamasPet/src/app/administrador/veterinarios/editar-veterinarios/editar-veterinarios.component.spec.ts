import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVeterinariosComponent } from './editar-veterinarios.component';

describe('EditarVeterinariosComponent', () => {
  let component: EditarVeterinariosComponent;
  let fixture: ComponentFixture<EditarVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarVeterinariosComponent]
    });
    fixture = TestBed.createComponent(EditarVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
