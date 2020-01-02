import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IAuthor } from './input-author.model';

@Component({
  selector: 'app-input-author',
  templateUrl: './input-author.component.html',
  styleUrls: ['./input-author.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAuthorComponent),
      multi: true
    }
  ]
})
export class InputAuthorComponent implements OnInit, ControlValueAccessor {
  @Input() authors: Array<IAuthor>;
  private _author: IAuthor;

  get author() {
    return `${this._author.firstName} ${this._author.lastName}`;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.authors);
    
  }

  onKeyUp(author: string) {

  }

  public writeValue(value: IAuthor): void {
    console.log(value);
    
    this._author = value;
    
    this.onChange();
    this.onTouched();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};
}
