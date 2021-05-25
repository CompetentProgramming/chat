/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsernnameComponent } from './usernname.component';

describe('UsernnameComponent', () => {
  let component: UsernnameComponent;
  let fixture: ComponentFixture<UsernnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
