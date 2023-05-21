import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRevenuesPageComponent } from './client-revenues-page.component';

describe('ClientRevenuesPageComponent', () => {
  let component: ClientRevenuesPageComponent;
  let fixture: ComponentFixture<ClientRevenuesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRevenuesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRevenuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
