import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToDoTaskComponent } from './update-to-do-task.component';

describe('UpdateToDoTaskComponent', () => {
  let component: UpdateToDoTaskComponent;
  let fixture: ComponentFixture<UpdateToDoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateToDoTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateToDoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
