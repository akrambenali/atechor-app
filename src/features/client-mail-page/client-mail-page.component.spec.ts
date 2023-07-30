import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMailPageComponent } from './client-mail-page.component';

describe('ClientMailPageComponent', () => {
  let component: ClientMailPageComponent;
  let fixture: ComponentFixture<ClientMailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientMailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
