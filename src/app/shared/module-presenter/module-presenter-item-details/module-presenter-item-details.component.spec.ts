import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePresenterItemDetailsComponent } from './module-presenter-item-details.component';

describe('ModulePresenterItemDetailsComponent', () => {
  let component: ModulePresenterItemDetailsComponent;
  let fixture: ComponentFixture<ModulePresenterItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePresenterItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePresenterItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
