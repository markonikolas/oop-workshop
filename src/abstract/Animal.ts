import INamable from '../interfaces/Namable';
import { AnimalType } from '../types';

abstract class Animal implements INamable {
    protected name: string;
    protected breed: string;

    constructor(animal: AnimalType) {
        const { name, breed } = animal;

        this.name = name;
        this.breed = breed;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name
    }

    get getBreed(): string {
        return this.breed;
    }

    set setBreed(breed: string) {
        this.breed = breed;
    }

}

export default Animal;