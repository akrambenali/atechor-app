import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHostingPageComponent } from './client-hosting-page.component';

describe('ClientHostingPageComponent', () => {
  let component: ClientHostingPageComponent;
  let fixture: ComponentFixture<ClientHostingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHostingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHostingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
