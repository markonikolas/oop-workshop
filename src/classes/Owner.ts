import INamable from '../interfaces/Namable';
import Person from '../abstract/Person';
import { Namable } from '../types';

class Owner extends Person implements INamable {

    constructor(person: Namable) {
        super(person);
    }
}

export default Owner;