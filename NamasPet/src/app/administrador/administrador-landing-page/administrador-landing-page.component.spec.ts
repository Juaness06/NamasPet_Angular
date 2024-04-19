import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLandingPageComponent } from './administrador-landing-page.component';

describe('AdministradorLandingPageComponent', () => {
  let component: AdministradorLandingPageComponent;
  let fixture: ComponentFixture<AdministradorLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorLandingPageComponent]
    });
    fixture = TestBed.createComponent(AdministradorLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
