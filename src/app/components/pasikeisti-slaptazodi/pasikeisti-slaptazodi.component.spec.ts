import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasikeistiSlaptazodiComponent } from './pasikeisti-slaptazodi.component';

describe('PasikeistiSlaptazodiComponent', () => {
  let component: PasikeistiSlaptazodiComponent;
  let fixture: ComponentFixture<PasikeistiSlaptazodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasikeistiSlaptazodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasikeistiSlaptazodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
