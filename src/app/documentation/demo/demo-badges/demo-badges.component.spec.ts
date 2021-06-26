import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBadgesComponent } from './demo-badges.component';

describe('DemoBadgesComponent', () => {
  let component: DemoBadgesComponent;
  let fixture: ComponentFixture<DemoBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
