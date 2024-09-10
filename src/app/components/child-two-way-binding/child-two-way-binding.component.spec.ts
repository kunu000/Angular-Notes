import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoWayBindingComponent } from './child-two-way-binding.component';

describe('ChildTwoWayBindingComponent', () => {
  let component: ChildTwoWayBindingComponent;
  let fixture: ComponentFixture<ChildTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTwoWayBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
