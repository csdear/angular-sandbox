import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-feature',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-feature.component.html',
  styleUrl: './my-feature.component.scss'
})
export class MyFeatureComponent {
  // Component Properties
  title: string = '>Hello from MyFeature!<';
  name: string = '';
  myMessage: string = '';
  id: number = 0;
  
  
  // Alt Arrow Function style is A-OK. Also auto-binds to ".this"
    // logMessage = () => {...}
  // Alt Anony Function style is A-OK. Does requires ".this"
    // logMessage = function() {...}
  // Alt typed Arrow function - void 
    // logMessage: () => void = () => {...}
    logMessage() {
    console.log('myMessage:', this.myMessage);
  }

  logData: (id: number, value: string) => string = (id, value) => {
    const result = `ID: ${id}, Value: ${value}`;
    console.log(result);
    return result;
  };

  
}
