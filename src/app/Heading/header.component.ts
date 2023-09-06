import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() futureLoaded = new EventEmitter<string>();

  constructor() {}

  onSelect(future: string) {
    this.futureLoaded.emit(future);
  }
}
