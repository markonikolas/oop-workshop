import INamable from '../interfaces/Namable';
import Person from '../abstract/Person';
import { AnimalType, Namable } from '../types';
import { IPetCollection } from '../interfaces/Pets';

class Owner extends Person implements INamable, IPetCollection {
    private petCollection: AnimalType[];

    constructor(person: Namable, petCollection: any = []) {
        super(person);

        this.petCollection = petCollection;
    }

    get getPetCollection(): AnimalType[] {
        return this.petCollection;
    }

    set setPetCollection(petCollection: AnimalType[]) {
        this.petCollection = petCollection;
    }

    getPetNames() {
        return this.petCollection.map((pet: any) => pet.name);
    }

    addPet(pet: any) {
        const petNames = this.getPetNames();
        const newPetCollection = [...this.getPetCollection, pet]

        if (petNames.includes(pet.name)) return 'Can\'t add pet name that already exists. Pick another name.'

        this.setPetCollection = newPetCollection;
    }

    removePet(name: string) {
        const petNames = this.getPetNames();

        if (!petNames.includes(name)) return 'Can\'t remove non existant pet.'

        const newPetCollection = [...this.getPetCollection].filter((pet: any) => name !== pet.name)

        this.setPetCollection = newPetCollection;
    }
}

export default Owner;