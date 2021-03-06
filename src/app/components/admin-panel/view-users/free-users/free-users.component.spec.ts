import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeUsersComponent } from './free-users.component';

describe('FreeUsersComponent', () => {
  let component: FreeUsersComponent;
  let fixture: ComponentFixture<FreeUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
