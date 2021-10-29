import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheparoquiaComponent } from './detalheparoquia.component';

describe('DetalheparoquiaComponent', () => {
  let component: DetalheparoquiaComponent;
  let fixture: ComponentFixture<DetalheparoquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheparoquiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheparoquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
