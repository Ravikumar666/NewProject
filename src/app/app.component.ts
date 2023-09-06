import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFuture = 'recipes';

  onNavigative(future: string) {
    this.loadedFuture = future;
  }
}
