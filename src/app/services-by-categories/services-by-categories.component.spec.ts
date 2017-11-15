import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesByCategoriesComponent } from './services-by-categories.component';

describe('ServicesByCategoriesComponent', () => {
  let component: ServicesByCategoriesComponent;
  let fixture: ComponentFixture<ServicesByCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesByCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
