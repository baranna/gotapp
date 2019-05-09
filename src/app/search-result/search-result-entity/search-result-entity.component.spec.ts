import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultEntityComponent} from './search-result-entity.component';

describe('SearchResultEntityComponent', () => {
  let component: SearchResultEntityComponent;
  let fixture: ComponentFixture<SearchResultEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultEntityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
