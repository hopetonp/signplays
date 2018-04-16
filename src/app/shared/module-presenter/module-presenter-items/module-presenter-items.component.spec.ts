import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePresenterItemsComponent } from './module-presenter-items.component';

describe('ModulePresenterItemsComponent', () => {
  let component: ModulePresenterItemsComponent;
  let fixture: ComponentFixture<ModulePresenterItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePresenterItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePresenterItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
