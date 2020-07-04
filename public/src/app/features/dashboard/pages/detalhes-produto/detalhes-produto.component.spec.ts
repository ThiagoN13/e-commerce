import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProdutosComponent } from './detalhes-produto.component';

describe('DetalhesProdutosComponent', () => {
  let component: DetalhesProdutosComponent;
  let fixture: ComponentFixture<DetalhesProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
