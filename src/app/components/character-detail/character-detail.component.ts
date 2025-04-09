import { Component, Input } from '@angular/core';
import { Character } from '../character';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'character-detail',
  imports: [FormsModule, NgIf],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss'
})
export class CharacterDetailComponent {
  @Input() character: Character = { id: 0, name: '' };
}
