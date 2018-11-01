import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiUzrasaComponent } from './prideti-uzrasa.component';

describe('PridetiUzrasaComponent', () => {
  let component: PridetiUzrasaComponent;
  let fixture: ComponentFixture<PridetiUzrasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PridetiUzrasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PridetiUzrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
