import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDrogasComponent } from './lista-drogas.component';

describe('ListaDrogasComponent', () => {
  let component: ListaDrogasComponent;
  let fixture: ComponentFixture<ListaDrogasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDrogasComponent]
    });
    fixture = TestBed.createComponent(ListaDrogasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
