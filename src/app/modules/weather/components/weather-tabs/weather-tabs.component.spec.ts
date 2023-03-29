import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTabsComponent } from './weather-tabs.component';

describe('WeatherTabsComponent', () => {
  let component: WeatherTabsComponent;
  let fixture: ComponentFixture<WeatherTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
