import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngContentComponent } from './testng-content.component';

describe('TestngContentComponent', () => {
  let component: TestngContentComponent;
  let fixture: ComponentFixture<TestngContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestngContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestngContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
