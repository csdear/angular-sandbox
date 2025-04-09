import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeature2Component } from './my-feature2.component';

describe('MyFeature2Component', () => {
  let component: MyFeature2Component;
  let fixture: ComponentFixture<MyFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFeature2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
