import Person from '../abstract/Person';
import PetCollection from './PetCollection';
import INamable from '../interfaces/Namable';
import { PetType, Namable } from '../types';

class Owner extends Person implements INamable {
    public petCollection: PetCollection;

    constructor(person: Namable, petCollection: PetCollection) {
        super(person);

        this.petCollection = petCollection;
    }
}

export default Owner;