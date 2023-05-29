import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeploymentPageComponent } from './client-deployment-page.component';

describe('ClientDeploymentPageComponent', () => {
  let component: ClientDeploymentPageComponent;
  let fixture: ComponentFixture<ClientDeploymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDeploymentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDeploymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
