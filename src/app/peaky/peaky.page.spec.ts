import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeakyPage } from './peaky.page';

describe('PeakyPage', () => {
  let component: PeakyPage;
  let fixture: ComponentFixture<PeakyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeakyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeakyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
