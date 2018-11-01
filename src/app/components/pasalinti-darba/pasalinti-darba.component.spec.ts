import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasalintiDarbaComponent } from './pasalinti-darba.component';

describe('PasalintiDarbaComponent', () => {
  let component: PasalintiDarbaComponent;
  let fixture: ComponentFixture<PasalintiDarbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasalintiDarbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasalintiDarbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
