import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedaguotiIvertiComponent } from './redaguoti-iverti.component';

describe('RedaguotiIvertiComponent', () => {
  let component: RedaguotiIvertiComponent;
  let fixture: ComponentFixture<RedaguotiIvertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedaguotiIvertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedaguotiIvertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
