import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosPlanosComponent } from './nossos-planos.component';

describe('NossosPlanosComponent', () => {
  let component: NossosPlanosComponent;
  let fixture: ComponentFixture<NossosPlanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossosPlanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NossosPlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
