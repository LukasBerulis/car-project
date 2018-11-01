import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeapmoketiPavedimaiComponent } from './neapmoketi-pavedimai.component';

describe('NeapmoketiPavedimaiComponent', () => {
  let component: NeapmoketiPavedimaiComponent;
  let fixture: ComponentFixture<NeapmoketiPavedimaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeapmoketiPavedimaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeapmoketiPavedimaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
