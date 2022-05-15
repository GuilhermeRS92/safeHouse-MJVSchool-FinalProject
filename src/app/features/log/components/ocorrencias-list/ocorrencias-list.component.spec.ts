import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciasListComponent } from './ocorrencias-list.component';

describe('OcorrenciasListComponent', () => {
  let component: OcorrenciasListComponent;
  let fixture: ComponentFixture<OcorrenciasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcorrenciasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcorrenciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
