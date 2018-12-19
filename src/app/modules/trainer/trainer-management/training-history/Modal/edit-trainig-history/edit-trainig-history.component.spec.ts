import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainigHistoryComponent } from './edit-trainig-history.component';

describe('EditTrainigHistoryComponent', () => {
  let component: EditTrainigHistoryComponent;
  let fixture: ComponentFixture<EditTrainigHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainigHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainigHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
