import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFiveDayComponent } from './weather-five-day.component';

describe('WeatherFiveDayComponent', () => {
  let component: WeatherFiveDayComponent;
  let fixture: ComponentFixture<WeatherFiveDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFiveDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherFiveDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
