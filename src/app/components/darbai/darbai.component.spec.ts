import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarbaiComponent } from './darbai.component';

describe('DarbaiComponent', () => {
  let component: DarbaiComponent;
  let fixture: ComponentFixture<DarbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
