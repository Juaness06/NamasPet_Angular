import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInVeterinariosComponent } from './log-in-veterinarios.component';

describe('LogInVeterinariosComponent', () => {
  let component: LogInVeterinariosComponent;
  let fixture: ComponentFixture<LogInVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInVeterinariosComponent]
    });
    fixture = TestBed.createComponent(LogInVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
