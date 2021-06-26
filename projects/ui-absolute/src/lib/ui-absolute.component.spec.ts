import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAbsoluteComponent } from './ui-absolute.component';

describe('UiAbsoluteComponent', () => {
  let component: UiAbsoluteComponent;
  let fixture: ComponentFixture<UiAbsoluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAbsoluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAbsoluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
