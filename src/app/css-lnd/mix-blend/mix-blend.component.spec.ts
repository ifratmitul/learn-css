import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixBlendComponent } from './mix-blend.component';

describe('MixBlendComponent', () => {
  let component: MixBlendComponent;
  let fixture: ComponentFixture<MixBlendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixBlendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixBlendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
