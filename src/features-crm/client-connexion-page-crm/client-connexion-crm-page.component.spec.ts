import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConnexionPageCrmComponent } from './client-connexion-crm-page.component';

describe('ClientConnexionPageComponent', () => {
  let component: ClientConnexionPageCrmComponent;
  let fixture: ComponentFixture<ClientConnexionPageCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientConnexionPageCrmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientConnexionPageCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
