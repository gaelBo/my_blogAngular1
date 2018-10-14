import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventErstellenComponent } from './event-erstellen.component';

describe('EventErstellenComponent', () => {
  let component: EventErstellenComponent;
  let fixture: ComponentFixture<EventErstellenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventErstellenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
