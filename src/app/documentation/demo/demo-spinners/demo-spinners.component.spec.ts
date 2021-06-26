import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSpinnersComponent } from './demo-spinners.component';

describe('DemoSpinnersComponent', () => {
  let component: DemoSpinnersComponent;
  let fixture: ComponentFixture<DemoSpinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSpinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
