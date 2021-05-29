import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'for realz!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('for realz!');
  });

  it('increment decrement works perfectly', () => {
    const cmp = new AppComponent();
    expect(cmp.counter).toEqual(0);
    cmp.increment();
    expect(cmp.counter).toEqual(1);
    cmp.increment();
    expect(cmp.counter).toEqual(2);
    cmp.decrement();
    cmp.decrement();
    cmp.decrement();
    expect(cmp.counter).toEqual(0);
  });
});
