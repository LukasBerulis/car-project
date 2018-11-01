import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiTiekejaComponent } from './prideti-tiekeja.component';

describe('PridetiTiekejaComponent', () => {
  let component: PridetiTiekejaComponent;
  let fixture: ComponentFixture<PridetiTiekejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PridetiTiekejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PridetiTiekejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
