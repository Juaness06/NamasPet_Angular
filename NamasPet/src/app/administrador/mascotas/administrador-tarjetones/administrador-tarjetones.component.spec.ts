import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorTarjetonesComponent } from './administrador-tarjetones.component';

describe('AdministradorTarjetonesComponent', () => {
  let component: AdministradorTarjetonesComponent;
  let fixture: ComponentFixture<AdministradorTarjetonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorTarjetonesComponent]
    });
    fixture = TestBed.createComponent(AdministradorTarjetonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
