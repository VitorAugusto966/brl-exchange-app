import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeForm } from './exchange-form';

describe('ExchangeForm', () => {
  let component: ExchangeForm;
  let fixture: ComponentFixture<ExchangeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
