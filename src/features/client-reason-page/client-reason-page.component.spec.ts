import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReasonPageComponent } from './client-reason-page.component';

describe('ClientReasonPageComponent', () => {
  let component: ClientReasonPageComponent;
  let fixture: ComponentFixture<ClientReasonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReasonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientReasonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
