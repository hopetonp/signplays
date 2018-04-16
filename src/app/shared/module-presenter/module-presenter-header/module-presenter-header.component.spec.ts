import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePresenterHeaderComponent } from './module-presenter-header.component';

describe('ModulePresenterHeaderComponent', () => {
  let component: ModulePresenterHeaderComponent;
  let fixture: ComponentFixture<ModulePresenterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePresenterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePresenterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
