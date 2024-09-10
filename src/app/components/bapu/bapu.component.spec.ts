import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BapuComponent } from './bapu.component';

describe('BapuComponent', () => {
  let component: BapuComponent;
  let fixture: ComponentFixture<BapuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BapuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BapuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
