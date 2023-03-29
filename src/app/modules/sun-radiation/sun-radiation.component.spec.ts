import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunRadiationComponent } from './sun-radiation.component';

describe('SunRadiationComponent', () => {
  let component: SunRadiationComponent;
  let fixture: ComponentFixture<SunRadiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunRadiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunRadiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
