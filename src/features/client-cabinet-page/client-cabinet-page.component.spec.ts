import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCabinetPageComponent } from './client-cabinet-page.component';

describe('ClientCabinetPageComponent', () => {
  let component: ClientCabinetPageComponent;
  let fixture: ComponentFixture<ClientCabinetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCabinetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCabinetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
