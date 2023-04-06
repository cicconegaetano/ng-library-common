import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibraryCommonComponent } from './ngx-library-common.component';

describe('NgxLibraryCommonComponent', () => {
  let component: NgxLibraryCommonComponent;
  let fixture: ComponentFixture<NgxLibraryCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLibraryCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLibraryCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
