import { Injectable } from "@angular/core";

import { Character } from '../components/character'
import { CHARACTERS } from '../mock-data/mock-characters'

@Injectable()
export class CharacterService {
    getCharacters = () : Character[] => {
        return CHARACTERS;
    } 
}