import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() public description: string;
  @Output() descriptionChange: EventEmitter<string> = new EventEmitter();

  constructor() { }
  
  public onChange(): void {
    this.descriptionChange.emit(this.description);
  }
}
