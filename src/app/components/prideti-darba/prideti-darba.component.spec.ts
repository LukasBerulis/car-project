import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiDarbaComponent } from './prideti-darba.component';

describe('PridetiDarbaComponent', () => {
  let component: PridetiDarbaComponent;
  let fixture: ComponentFixture<PridetiDarbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PridetiDarbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PridetiDarbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
