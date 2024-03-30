import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetonesComponent } from './tarjetones.component';

describe('TarjetonesComponent', () => {
  let component: TarjetonesComponent;
  let fixture: ComponentFixture<TarjetonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetonesComponent]
    });
    fixture = TestBed.createComponent(TarjetonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
