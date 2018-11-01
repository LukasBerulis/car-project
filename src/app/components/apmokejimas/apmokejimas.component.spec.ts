import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmokejimasComponent } from './apmokejimas.component';

describe('ApmokejimasComponent', () => {
  let component: ApmokejimasComponent;
  let fixture: ComponentFixture<ApmokejimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmokejimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmokejimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
