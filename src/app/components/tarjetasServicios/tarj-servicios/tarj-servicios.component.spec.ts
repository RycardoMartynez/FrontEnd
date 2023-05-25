import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjServiciosComponent } from './tarj-servicios.component';

describe('TarjServiciosComponent', () => {
  let component: TarjServiciosComponent;
  let fixture: ComponentFixture<TarjServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
