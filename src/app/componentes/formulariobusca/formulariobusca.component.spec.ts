import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariobuscaComponent } from './formulariobusca.component';

describe('FormulariobuscaComponent', () => {
  let component: FormulariobuscaComponent;
  let fixture: ComponentFixture<FormulariobuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariobuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariobuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
