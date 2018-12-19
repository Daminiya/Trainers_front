import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingHistoryComponent } from './add-training-history.component';

describe('AddTrainingHistoryComponent', () => {
  let component: AddTrainingHistoryComponent;
  let fixture: ComponentFixture<AddTrainingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
