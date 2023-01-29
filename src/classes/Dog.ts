import Animal from '../abstract/Animal';
import { DogType } from '../types';

class Dog extends Animal {

    constructor(dog: DogType) {
        super(dog);
    }

}

export default Dog;