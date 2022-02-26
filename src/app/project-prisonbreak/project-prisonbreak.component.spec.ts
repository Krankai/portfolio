import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPrisonbreakComponent } from './project-prisonbreak.component';

describe('ProjectPrisonbreakComponent', () => {
  let component: ProjectPrisonbreakComponent;
  let fixture: ComponentFixture<ProjectPrisonbreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPrisonbreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPrisonbreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
