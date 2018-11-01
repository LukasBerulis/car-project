import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineInputComponent } from './engine-input.component';

describe('EngineInputComponent', () => {
  let component: EngineInputComponent;
  let fixture: ComponentFixture<EngineInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
