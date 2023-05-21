import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTypePageComponent } from './client-type-page.component';

describe('ClientTypePageComponent', () => {
  let component: ClientTypePageComponent;
  let fixture: ComponentFixture<ClientTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTypePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
