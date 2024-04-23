import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogasTratamientoComponent } from './drogas-tratamiento.component';

describe('DrogasTratamientoComponent', () => {
  let component: DrogasTratamientoComponent;
  let fixture: ComponentFixture<DrogasTratamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrogasTratamientoComponent]
    });
    fixture = TestBed.createComponent(DrogasTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
