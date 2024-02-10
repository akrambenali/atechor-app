import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientCoefficientsPageCrmComponent } from './client-coefficients-crm-page.component';

describe('ClientCoefficientsPageCrmComponent', () => {
  let component: ClientCoefficientsPageCrmComponent;
  let fixture: ComponentFixture<ClientCoefficientsPageCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientCoefficientsPageCrmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientCoefficientsPageCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
