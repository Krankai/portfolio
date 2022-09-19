import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemorileComponent } from './project-memorile.component';

describe('ProjectMemorileComponent', () => {
  let component: ProjectMemorileComponent;
  let fixture: ComponentFixture<ProjectMemorileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMemorileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMemorileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
