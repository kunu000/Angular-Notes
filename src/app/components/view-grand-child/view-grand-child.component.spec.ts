import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGrandChildComponent } from './view-grand-child.component';

describe('ViewGrandChildComponent', () => {
  let component: ViewGrandChildComponent;
  let fixture: ComponentFixture<ViewGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGrandChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
