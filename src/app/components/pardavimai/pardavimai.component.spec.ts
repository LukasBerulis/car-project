import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PardavimaiComponent } from './pardavimai.component';

describe('PardavimaiComponent', () => {
  let component: PardavimaiComponent;
  let fixture: ComponentFixture<PardavimaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PardavimaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PardavimaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
