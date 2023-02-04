import Animal from './Animal';

import { INamable } from '../interfaces/Namable';
import { IWalkable } from '../interfaces/Move';
import { BirdTypes } from '../types';

import * as Move from '../util/move';

abstract class Bird extends Animal implements INamable, IWalkable {

    abstract move(): string;

    constructor(bird: BirdTypes) {
        const { name, species } = bird;

        super(name, species);
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    walk(): string {
        return Move.walk();
    }
}

export default Bird;