import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFonctionsPageComponent } from './client-fonctions-page.component';

describe('ClientFonctionsPageComponent', () => {
  let component: ClientFonctionsPageComponent;
  let fixture: ComponentFixture<ClientFonctionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFonctionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFonctionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
