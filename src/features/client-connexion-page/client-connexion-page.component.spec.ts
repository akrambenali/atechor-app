import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConnexionPageComponent } from './client-connexion-page.component';

describe('ClientConnexionPageComponent', () => {
  let component: ClientConnexionPageComponent;
  let fixture: ComponentFixture<ClientConnexionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConnexionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientConnexionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
