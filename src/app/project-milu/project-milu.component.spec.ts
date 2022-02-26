import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMiluComponent } from './project-milu.component';

describe('ProjectMiluComponent', () => {
  let component: ProjectMiluComponent;
  let fixture: ComponentFixture<ProjectMiluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMiluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMiluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
