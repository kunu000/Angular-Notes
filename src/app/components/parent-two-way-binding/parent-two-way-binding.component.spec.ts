import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoWayBindingComponent } from './parent-two-way-binding.component';

describe('ParentTwoWayBindingComponent', () => {
  let component: ParentTwoWayBindingComponent;
  let fixture: ComponentFixture<ParentTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentTwoWayBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
