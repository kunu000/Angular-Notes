import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHostComponent } from './learn-host.component';

describe('LearnHostComponent', () => {
  let component: LearnHostComponent;
  let fixture: ComponentFixture<LearnHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
