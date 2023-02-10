import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitNumberComponent } from './digit-number.component';

describe('DigitNumberComponent', () => {
  let component: DigitNumberComponent;
  let fixture: ComponentFixture<DigitNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
