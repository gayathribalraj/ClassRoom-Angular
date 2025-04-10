import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMakerContainerComponent } from './task-maker-container.component';

describe('TaskMakerContainerComponent', () => {
  let component: TaskMakerContainerComponent;
  let fixture: ComponentFixture<TaskMakerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskMakerContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMakerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
