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
export class InputAuthorComponent implements ControlValueAccessor {
  public value = '';
  public isAuthorsListOpened = false;
  public selectedAuthors: Array<IAuthor> = [];
  public filteredAuthors: Array<IAuthor> = [];
  @Input() private allAuthors: Array<IAuthor> = [];

  constructor() { }

  public onFocus(text: string): void {
    this.isAuthorsListOpened = true;
    this.filterAuthors(text);
  }
  
  public onFocusOut(): void {
    this.isAuthorsListOpened = false;
  }

  public onKeyUp(text: string): void {
    this.value = text;
    this.filterAuthors(text);
  }

  public removeAuthor(author: IAuthor): void {
    this.selectedAuthors = this.selectedAuthors.filter(
      ({ firstName, lastName }) => 
        author.firstName !== firstName || author.lastName !== lastName
    );

    this.onChange(this.selectedAuthors);
  }

  public addAuthor(rawAuthor: IAuthor | string): void {
    const author = this.getAuthor(rawAuthor);
    
    if (!this.isAuthorSelected(author)) {
      this.writeValue([...this.selectedAuthors, author]);
      this.value = '';
    }
  }

  public writeValue(authors: Array<IAuthor>): void {
    this.selectedAuthors = authors;
    this.onChange(this.selectedAuthors);
    this.onTouched();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private filterAuthors(text: string): void {
    const lowerText = text.toLowerCase().trim();

    this.filteredAuthors = this.allAuthors.filter(a =>
      `${a.firstName} ${a.lastName}`.toLowerCase().includes(lowerText)
    );
  }

  private isAuthorSelected(author: IAuthor): boolean {
    const someFn = ({ firstName, lastName }: IAuthor) =>
      author.firstName.toLowerCase() === firstName.toLowerCase()
        && author.lastName.toLowerCase() === lastName.toLowerCase();
    
    return !author || this.selectedAuthors.some(someFn);
  }

  private getAuthor(rawAuthor: IAuthor | string): IAuthor | null {
    let author = {
      firstName: (rawAuthor as IAuthor).firstName,
      lastName: (rawAuthor as IAuthor).lastName
    };
    
    if (!author.firstName || !author.lastName) {
      try {
        const fullName = String(rawAuthor).match(/([^ ]+)(.*)/);

        author.firstName = fullName[1];
        author.lastName = fullName[2].trim() || '';
      } catch (e) {
        author = null;
      }
    }

    return author;
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};
}
