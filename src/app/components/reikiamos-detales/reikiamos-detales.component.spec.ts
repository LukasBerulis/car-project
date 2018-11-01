import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikiamosDetalesComponent } from './reikiamos-detales.component';

describe('ReikiamosDetalesComponent', () => {
  let component: ReikiamosDetalesComponent;
  let fixture: ComponentFixture<ReikiamosDetalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReikiamosDetalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReikiamosDetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
