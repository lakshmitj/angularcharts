import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclePlotComponent } from './cycle-plot.component';

describe('CyclePlotComponent', () => {
  let component: CyclePlotComponent;
  let fixture: ComponentFixture<CyclePlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclePlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
