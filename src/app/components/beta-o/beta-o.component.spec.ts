import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaOComponent } from './beta-o.component';

describe('BetaOComponent', () => {
  let component: BetaOComponent;
  let fixture: ComponentFixture<BetaOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetaOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetaOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
