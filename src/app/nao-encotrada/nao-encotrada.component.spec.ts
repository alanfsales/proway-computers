import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncotradaComponent } from './nao-encotrada.component';

describe('NaoEncotradaComponent', () => {
  let component: NaoEncotradaComponent;
  let fixture: ComponentFixture<NaoEncotradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoEncotradaComponent]
    });
    fixture = TestBed.createComponent(NaoEncotradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
