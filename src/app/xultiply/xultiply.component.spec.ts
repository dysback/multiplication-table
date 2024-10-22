import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XultiplyComponent } from './xultiply.component';

describe('XultiplyComponent', () => {
  let component: XultiplyComponent;
  let fixture: ComponentFixture<XultiplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XultiplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
