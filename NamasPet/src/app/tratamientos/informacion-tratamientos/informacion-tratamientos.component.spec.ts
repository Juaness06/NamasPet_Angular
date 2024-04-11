import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTratamientosComponent } from './informacion-tratamientos.component';

describe('InformacionTratamientosComponent', () => {
  let component: InformacionTratamientosComponent;
  let fixture: ComponentFixture<InformacionTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionTratamientosComponent]
    });
    fixture = TestBed.createComponent(InformacionTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
