import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SusisiektiComponent } from './susisiekti.component';

describe('SusisiektiComponent', () => {
  let component: SusisiektiComponent;
  let fixture: ComponentFixture<SusisiektiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SusisiektiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SusisiektiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
