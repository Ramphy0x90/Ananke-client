import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketActionsMenuComponent } from './ticket-actions-menu.component';

describe('TicketActionsMenuComponent', () => {
  let component: TicketActionsMenuComponent;
  let fixture: ComponentFixture<TicketActionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketActionsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketActionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
