import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCollectionDetailsComponent } from './personal-collection-details.component';

describe('PersonalCollectionDetailsComponent', () => {
  let component: PersonalCollectionDetailsComponent;
  let fixture: ComponentFixture<PersonalCollectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCollectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCollectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
