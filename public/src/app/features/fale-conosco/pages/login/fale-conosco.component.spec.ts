import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleConoscoPageComponent } from './fale-conosco.component';

describe('FaleConoscoPageComponent', () => {
  let component: FaleConoscoPageComponent;
  let fixture: ComponentFixture<FaleConoscoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaleConoscoPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaleConoscoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
