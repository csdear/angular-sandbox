import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getTopCharacters()
      .then(characters => this.characters = characters);
  }
}
