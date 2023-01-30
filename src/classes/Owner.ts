import Person from '../abstract/Person';
import INamable from '../interfaces/Namable';
import { AnimalType, Namable } from '../types';

class Owner extends Person implements INamable {
    public petCollection: AnimalType[];

    constructor(person: Namable, petCollection: AnimalType[] = []) {
        super(person);

        this.petCollection = petCollection;
    }
}

export default Owner;