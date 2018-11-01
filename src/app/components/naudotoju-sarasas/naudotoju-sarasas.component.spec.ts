import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaudotojuSarasasComponent } from './naudotoju-sarasas.component';

describe('NaudotojuSarasasComponent', () => {
  let component: NaudotojuSarasasComponent;
  let fixture: ComponentFixture<NaudotojuSarasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaudotojuSarasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaudotojuSarasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
