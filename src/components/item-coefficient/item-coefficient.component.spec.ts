import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCoefficientComponent } from './item-coefficient.component';

describe('ItemCoefficientComponent', () => {
  let component: ItemCoefficientComponent;
  let fixture: ComponentFixture<ItemCoefficientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCoefficientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCoefficientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
