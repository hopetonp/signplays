import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePresenterSidebarComponent } from './module-presenter-sidebar.component';

describe('ModulePresenterSidebarComponent', () => {
  let component: ModulePresenterSidebarComponent;
  let fixture: ComponentFixture<ModulePresenterSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePresenterSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePresenterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
