import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewIssuesPage } from './new-issues.page';

describe('NewIssuesPage', () => {
  let component: NewIssuesPage;
  let fixture: ComponentFixture<NewIssuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIssuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewIssuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
