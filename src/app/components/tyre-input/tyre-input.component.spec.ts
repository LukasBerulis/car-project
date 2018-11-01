import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreInputComponent } from './tyre-input.component';

describe('TyreInputComponent', () => {
  let component: TyreInputComponent;
  let fixture: ComponentFixture<TyreInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyreInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
