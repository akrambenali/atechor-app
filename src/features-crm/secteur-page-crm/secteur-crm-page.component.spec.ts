import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurPageCrmComponent } from './secteur-crm-page.component';

describe('SecteurPageCrmComponent', () => {
  let component: SecteurPageCrmComponent;
  let fixture: ComponentFixture<SecteurPageCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecteurPageCrmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecteurPageCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
