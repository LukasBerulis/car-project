import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrekiuSarasasComponent } from './prekiu-sarasas.component';

describe('PrekiuSarasasComponent', () => {
  let component: PrekiuSarasasComponent;
  let fixture: ComponentFixture<PrekiuSarasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrekiuSarasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrekiuSarasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
