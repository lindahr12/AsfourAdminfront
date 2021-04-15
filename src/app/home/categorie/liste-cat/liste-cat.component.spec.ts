import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCatComponent } from './liste-cat.component';

describe('ListeCatComponent', () => {
  let component: ListeCatComponent;
  let fixture: ComponentFixture<ListeCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
