import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroChildComponent } from './superhero-child.component';

describe('SuperheroChildComponent', () => {
  let component: SuperheroChildComponent;
  let fixture: ComponentFixture<SuperheroChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
