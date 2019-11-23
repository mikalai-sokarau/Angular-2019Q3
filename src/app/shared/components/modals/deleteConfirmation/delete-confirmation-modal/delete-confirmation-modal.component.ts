import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteConfirmationModalComponent implements OnInit {
  @Output() userAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  public onUserAction(value: boolean) {
    this.userAction.emit(value);
  }
}
