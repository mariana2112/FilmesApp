import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OHomemInvisivelPage } from './o-homem-invisivel.page';

describe('OHomemInvisivelPage', () => {
  let component: OHomemInvisivelPage;
  let fixture: ComponentFixture<OHomemInvisivelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OHomemInvisivelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OHomemInvisivelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
