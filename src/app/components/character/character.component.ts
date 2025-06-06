import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .then(characters => this.characters = characters);
  }
}
