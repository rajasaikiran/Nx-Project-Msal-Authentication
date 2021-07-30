import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeaturesComponent } from './my-features.component';

describe('MyFeaturesComponent', () => {
  let component: MyFeaturesComponent;
  let fixture: ComponentFixture<MyFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
