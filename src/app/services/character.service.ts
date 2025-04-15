import { Injectable } from "@angular/core";
import { Character } from '../components/character';
import { CHARACTERS } from '../mock-data/mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

  getTopCharacters(): Promise<Character[]> {
    return this.getCharacters().then(characters => 
      characters.sort((a, b) => a.id - b.id).slice(0, 4)
    );
  }
}
