import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritarProdutoComponent } from './favoritar-produto.component';

describe('FavoritarProdutoComponent', () => {
  let component: FavoritarProdutoComponent;
  let fixture: ComponentFixture<FavoritarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
