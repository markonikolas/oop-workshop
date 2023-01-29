import INamable from '../interfaces/Namable';
import { Namable } from '../types';

abstract class Person implements INamable {
    protected name: string;

    constructor(person: Namable) {
        this.name = person.name;
    }

    get getName(): string {
        return this.name;
    }

    set setName(fullName: string) {
        this.name = fullName;
    }

};

export default Person;