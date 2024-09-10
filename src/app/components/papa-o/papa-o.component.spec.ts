import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaOComponent } from './papa-o.component';

describe('PapaOComponent', () => {
  let component: PapaOComponent;
  let fixture: ComponentFixture<PapaOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapaOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PapaOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
