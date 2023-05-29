import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNumbersPageComponent } from './client-numbers-page.component';

describe('ClientNumbersPageComponent', () => {
  let component: ClientNumbersPageComponent;
  let fixture: ComponentFixture<ClientNumbersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNumbersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientNumbersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
