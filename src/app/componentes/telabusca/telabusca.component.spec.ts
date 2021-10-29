import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelabuscaComponent } from './telabusca.component';

describe('TelabuscaComponent', () => {
  let component: TelabuscaComponent;
  let fixture: ComponentFixture<TelabuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelabuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelabuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
