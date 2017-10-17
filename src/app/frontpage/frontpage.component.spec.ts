import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FrontpageComponent } from './frontpage.component';
import { ContentService } from '../services/content.service';

describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FrontpageComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        ContentService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
