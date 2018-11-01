import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreInfoComponent } from './tyre-info.component';

describe('TyreInfoComponent', () => {
  let component: TyreInfoComponent;
  let fixture: ComponentFixture<TyreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
