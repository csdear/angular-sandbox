import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../character';
import { CharacterDetailComponent } from "../character-detail/character-detail.component";
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'character',
  imports: [FormsModule, NgForOf, NgIf, CharacterDetailComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  providers: [CharacterService]
})

export class CharacterComponent implements OnInit {
  title = 'Tour of Spongebob Characters';
  // character = 'Spongebob';

  
  // character object instance DEP
    // character : Character = {
    //   id: 1,
    //   name: 'Spongebob'
    // }

  // Exposing a public property in the component that exposing characters for binding.
  // characters = CHARACTERS;
  // snarfed it with a !
  characters! : Character[];
  selectedCharacter: Character = { id: 0, name: '' };

  constructor(private characterService: CharacterService) { }

  getCharacters(): void {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  onSelect = (character: Character): void => {
    this.selectedCharacter = character;
  }
  
}