import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemontoRezervacijaComponent } from './remonto-rezervacija.component';

describe('RemontoRezervacijaComponent', () => {
  let component: RemontoRezervacijaComponent;
  let fixture: ComponentFixture<RemontoRezervacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemontoRezervacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemontoRezervacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
