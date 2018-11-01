import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiRemontoVeiksmaComponent } from './prideti-remonto-veiksma.component';

describe('PridetiRemontoVeiksmaComponent', () => {
  let component: PridetiRemontoVeiksmaComponent;
  let fixture: ComponentFixture<PridetiRemontoVeiksmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PridetiRemontoVeiksmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PridetiRemontoVeiksmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
