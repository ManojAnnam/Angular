/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StarIconComponent } from './star-icon.component';

describe('StarIconComponent', () => {
  let component: StarIconComponent;
  let fixture: ComponentFixture<StarIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
