import { Component } from '@angular/core';
// import { Config } from './shared/index';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  selector: 'sd-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    console.log('Environment config');
  }
}
