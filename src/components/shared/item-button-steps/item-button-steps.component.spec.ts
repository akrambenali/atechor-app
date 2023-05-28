import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemButtonStepsComponent } from './item-button-steps.component';

describe('ItemButtonStepsComponent', () => {
  let component: ItemButtonStepsComponent;
  let fixture: ComponentFixture<ItemButtonStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemButtonStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemButtonStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
