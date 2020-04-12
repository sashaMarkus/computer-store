import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPageNextStepComponent } from './sign-up-page-next-step.component';

describe('SignUpPageNextStepComponent', () => {
  let component: SignUpPageNextStepComponent;
  let fixture: ComponentFixture<SignUpPageNextStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPageNextStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPageNextStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
