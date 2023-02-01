import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeTextComponent } from './stripe-text.component';

describe('StripeTextComponent', () => {
  let component: StripeTextComponent;
  let fixture: ComponentFixture<StripeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
