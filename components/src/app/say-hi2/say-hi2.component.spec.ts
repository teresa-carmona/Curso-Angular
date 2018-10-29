import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayHi2Component } from './say-hi2.component';

describe('SayHi2Component', () => {
  let component: SayHi2Component;
  let fixture: ComponentFixture<SayHi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayHi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayHi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
