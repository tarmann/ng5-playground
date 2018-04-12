import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFiltersComponent } from './story-filters.component';

describe('StoryFiltersComponent', () => {
  let component: StoryFiltersComponent;
  let fixture: ComponentFixture<StoryFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
