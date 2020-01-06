import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhomPage } from './nhom.page';

describe('NhomPage', () => {
  let component: NhomPage;
  let fixture: ComponentFixture<NhomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
