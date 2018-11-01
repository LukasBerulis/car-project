import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrukcijosComponent } from './instrukcijos.component';

describe('InstrukcijosComponent', () => {
  let component: InstrukcijosComponent;
  let fixture: ComponentFixture<InstrukcijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrukcijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrukcijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
