import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDataPageComponent } from './client-data-page.component';

describe('ClientDataPageComponent', () => {
  let component: ClientDataPageComponent;
  let fixture: ComponentFixture<ClientDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
