import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDrogasTratamientoComponent } from './asignar-drogas-tratamiento.component';

describe('AsignarDrogasTratamientoComponent', () => {
  let component: AsignarDrogasTratamientoComponent;
  let fixture: ComponentFixture<AsignarDrogasTratamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarDrogasTratamientoComponent]
    });
    fixture = TestBed.createComponent(AsignarDrogasTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
