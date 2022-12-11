import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CounterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it(`Given app component initial value 1, should increment value in counter by 1`, () => {
    const counterEl = fixture.debugElement.query(
      By.directive(CounterComponent)
    );
    const counter: CounterComponent = counterEl.componentInstance;

    // Check initial value
    expect(counter.count).toEqual(-1);
    expect(app.value).toEqual(1);

    // Populate app value (1) inside counter + increment
    fixture.detectChanges();

    // Check value after init
    expect(app.value).toEqual(1);
    expect(counter.count).toEqual(2);
  });
});
