import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMascotasComponent } from './editar-mascotas.component';

describe('EditarMascotasComponent', () => {
  let component: EditarMascotasComponent;
  let fixture: ComponentFixture<EditarMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMascotasComponent]
    });
    fixture = TestBed.createComponent(EditarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
