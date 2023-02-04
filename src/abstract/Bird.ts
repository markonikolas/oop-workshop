import Animal from './Animal';

import INamable from '../interfaces/Namable';
import { BirdTypes } from '../types';

abstract class Bird extends Animal implements INamable {

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
}

export default Bird;