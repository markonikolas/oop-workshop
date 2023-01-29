import Animal from '../abstract/Animal';
import { CatType } from '../types';

class Cat extends Animal {

    constructor(cat: CatType) {
        super(cat);
    }

}

export default Cat;