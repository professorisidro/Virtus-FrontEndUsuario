import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaparoquiasComponent } from './listaparoquias.component';

describe('ListaparoquiasComponent', () => {
  let component: ListaparoquiasComponent;
  let fixture: ComponentFixture<ListaparoquiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaparoquiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaparoquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
