import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaudotojaiComponent } from './naudotojai.component';

describe('NaudotojaiComponent', () => {
  let component: NaudotojaiComponent;
  let fixture: ComponentFixture<NaudotojaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaudotojaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaudotojaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
