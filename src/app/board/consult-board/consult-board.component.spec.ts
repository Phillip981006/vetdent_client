import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBoardComponent } from './consult-board.component';

describe('ConsultBoardComponent', () => {
  let component: ConsultBoardComponent;
  let fixture: ComponentFixture<ConsultBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultBoardComponent]
    });
    fixture = TestBed.createComponent(ConsultBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
