import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;

  log = [];

  onToogleDisplay() {
    this.showSecret = !this.showSecret;
    let logsInternal = this.log;
    logsInternal.push(logsInternal.length + 1);
  }
}
