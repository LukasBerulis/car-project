import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedaguotiTiekejaComponent } from './redaguoti-tiekeja.component';

describe('RedaguotiTiekejaComponent', () => {
  let component: RedaguotiTiekejaComponent;
  let fixture: ComponentFixture<RedaguotiTiekejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedaguotiTiekejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedaguotiTiekejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
