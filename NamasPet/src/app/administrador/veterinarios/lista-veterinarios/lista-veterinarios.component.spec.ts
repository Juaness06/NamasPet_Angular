import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVeterinariosComponent } from './lista-veterinarios.component';

describe('ListaVeterinariosComponent', () => {
  let component: ListaVeterinariosComponent;
  let fixture: ComponentFixture<ListaVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVeterinariosComponent]
    });
    fixture = TestBed.createComponent(ListaVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
