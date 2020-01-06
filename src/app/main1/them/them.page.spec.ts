import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThemPage } from './them.page';

describe('ThemPage', () => {
  let component: ThemPage;
  let fixture: ComponentFixture<ThemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
