import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLogInComponent } from './administrador-log-in.component';

describe('AdministradorLogInComponent', () => {
  let component: AdministradorLogInComponent;
  let fixture: ComponentFixture<AdministradorLogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorLogInComponent]
    });
    fixture = TestBed.createComponent(AdministradorLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
