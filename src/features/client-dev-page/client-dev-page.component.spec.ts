import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDevPageComponent } from './client-dev-page.component';

describe('ClientDevPageComponent', () => {
  let component: ClientDevPageComponent;
  let fixture: ComponentFixture<ClientDevPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDevPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
