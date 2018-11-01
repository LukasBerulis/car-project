import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrankioRezervacijaComponent } from './irankio-rezervacija.component';

describe('IrankioRezervacijaComponent', () => {
  let component: IrankioRezervacijaComponent;
  let fixture: ComponentFixture<IrankioRezervacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrankioRezervacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrankioRezervacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
