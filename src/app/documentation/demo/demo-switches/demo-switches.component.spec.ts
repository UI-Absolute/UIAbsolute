import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSwitchesComponent } from './demo-switches.component';

describe('DemoSwitchesComponent', () => {
  let component: DemoSwitchesComponent;
  let fixture: ComponentFixture<DemoSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
