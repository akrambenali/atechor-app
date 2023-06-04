import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeadlinePageComponent } from './client-deadline-page.component';

describe('ClientDeadlinePageComponent', () => {
  let component: ClientDeadlinePageComponent;
  let fixture: ComponentFixture<ClientDeadlinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDeadlinePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDeadlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
