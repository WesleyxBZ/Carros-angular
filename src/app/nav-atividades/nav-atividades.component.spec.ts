import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAtividadesComponent } from './nav-atividades.component';

describe('NavAtividadesComponent', () => {
  let component: NavAtividadesComponent;
  let fixture: ComponentFixture<NavAtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
