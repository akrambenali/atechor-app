import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCoefficientsPageComponent } from './client-coefficients-page.component';

describe('ClientCoefficientsPageComponent', () => {
  let component: ClientCoefficientsPageComponent;
  let fixture: ComponentFixture<ClientCoefficientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCoefficientsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCoefficientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
