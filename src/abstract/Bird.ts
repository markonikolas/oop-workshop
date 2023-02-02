import { AnimalType } from '../types';
import Animal from './Animal';

abstract class Bird extends Animal {
    constructor(bird: AnimalType) {
        super(bird);
    }

    abstract move(): string
}

export default Bird;