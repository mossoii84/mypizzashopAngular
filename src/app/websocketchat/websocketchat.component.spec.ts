import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketchatComponent } from './websocketchat.component';

describe('WebsocketchatComponent', () => {
  let component: WebsocketchatComponent;
  let fixture: ComponentFixture<WebsocketchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
