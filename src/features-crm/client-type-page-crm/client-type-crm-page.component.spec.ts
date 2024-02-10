import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTypePageCrmComponent } from './client-type-crm-page.component';

describe('ClientTypePageComponent', () => {
  let component: ClientTypePageCrmComponent;
  let fixture: ComponentFixture<ClientTypePageCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientTypePageCrmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientTypePageCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
