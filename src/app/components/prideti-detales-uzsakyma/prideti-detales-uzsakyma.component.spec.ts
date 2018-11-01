import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiDetalesUzsakymaComponent } from './prideti-detales-uzsakyma.component';

describe('PridetiDetalesUzsakymaComponent', () => {
  let component: PridetiDetalesUzsakymaComponent;
  let fixture: ComponentFixture<PridetiDetalesUzsakymaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PridetiDetalesUzsakymaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PridetiDetalesUzsakymaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
