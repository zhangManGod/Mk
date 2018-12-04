import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoshboardComponent } from './doshboard.component';

describe('DoshboardComponent', () => {
  let component: DoshboardComponent;
  let fixture: ComponentFixture<DoshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
