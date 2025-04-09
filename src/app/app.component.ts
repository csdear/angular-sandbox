import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFeatureComponent } from "./components/my-feature/my-feature.component";
import { CharacterComponent } from "./components/character/character.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFeatureComponent, CharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gary-app';
}
