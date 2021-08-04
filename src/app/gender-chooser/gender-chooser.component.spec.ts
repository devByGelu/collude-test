import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderChooserComponent } from './gender-chooser.component';

describe('GenderChooserComponent', () => {
  let component: GenderChooserComponent;
  let fixture: ComponentFixture<GenderChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
