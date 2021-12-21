import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSongsComponent } from './add-edit-songs.component';

describe('AddEditSongsComponent', () => {
  let component: AddEditSongsComponent;
  let fixture: ComponentFixture<AddEditSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
