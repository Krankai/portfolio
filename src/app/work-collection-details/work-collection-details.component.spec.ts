import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCollectionDetailsComponent } from './work-collection-details.component';

describe('WorkCollectionDetailsComponent', () => {
  let component: WorkCollectionDetailsComponent;
  let fixture: ComponentFixture<WorkCollectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkCollectionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCollectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
