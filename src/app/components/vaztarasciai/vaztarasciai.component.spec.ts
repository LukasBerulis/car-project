import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaztarasciaiComponent } from './vaztarasciai.component';

describe('VaztarasciaiComponent', () => {
  let component: VaztarasciaiComponent;
  let fixture: ComponentFixture<VaztarasciaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaztarasciaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaztarasciaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
