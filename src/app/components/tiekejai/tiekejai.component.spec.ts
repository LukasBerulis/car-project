import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiekejaiComponent } from './tiekejai.component';

describe('TiekejaiComponent', () => {
  let component: TiekejaiComponent;
  let fixture: ComponentFixture<TiekejaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiekejaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiekejaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
