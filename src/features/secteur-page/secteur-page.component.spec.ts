import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurPageComponent } from './secteur-page.component';

describe('SecteurPageComponent', () => {
  let component: SecteurPageComponent;
  let fixture: ComponentFixture<SecteurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecteurPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecteurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
