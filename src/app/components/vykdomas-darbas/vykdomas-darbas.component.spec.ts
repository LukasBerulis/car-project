import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VykdomasDarbasComponent } from './vykdomas-darbas.component';

describe('VykdomasDarbasComponent', () => {
  let component: VykdomasDarbasComponent;
  let fixture: ComponentFixture<VykdomasDarbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VykdomasDarbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VykdomasDarbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
