import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDinoageComponent } from './project-dinoage.component';

describe('ProjectDinoageComponent', () => {
  let component: ProjectDinoageComponent;
  let fixture: ComponentFixture<ProjectDinoageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDinoageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDinoageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
