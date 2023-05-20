import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtechorButtonComponent } from './atechor-button.component';

describe('AtechorButtonComponent', () => {
  let component: AtechorButtonComponent;
  let fixture: ComponentFixture<AtechorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtechorButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtechorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
