import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesTiempoCompletoComponent } from './docentes-tiempo-completo.component';

describe('DocentesTiempoCompletoComponent', () => {
  let component: DocentesTiempoCompletoComponent;
  let fixture: ComponentFixture<DocentesTiempoCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesTiempoCompletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesTiempoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
