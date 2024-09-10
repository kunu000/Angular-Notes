import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetwaComponent } from './betwa.component';

describe('BetwaComponent', () => {
  let component: BetwaComponent;
  let fixture: ComponentFixture<BetwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
