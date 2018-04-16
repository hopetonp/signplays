import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePresenterComponent } from './module-presenter.component';

describe('ModulePresenterComponent', () => {
  let component: ModulePresenterComponent;
  let fixture: ComponentFixture<ModulePresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
