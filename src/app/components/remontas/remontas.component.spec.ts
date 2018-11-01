import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemontasComponent } from './remontas.component';

describe('RemontasComponent', () => {
  let component: RemontasComponent;
  let fixture: ComponentFixture<RemontasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemontasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemontasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
