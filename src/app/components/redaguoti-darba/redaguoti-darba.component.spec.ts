import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedaguotiDarbaComponent } from './redaguoti-darba.component';

describe('RedaguotiDarbaComponent', () => {
  let component: RedaguotiDarbaComponent;
  let fixture: ComponentFixture<RedaguotiDarbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedaguotiDarbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedaguotiDarbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
