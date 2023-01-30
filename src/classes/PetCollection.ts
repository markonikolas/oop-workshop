import { IPetCollection } from '../interfaces/Pets';
import { AnimalType } from '../types';

class PetCollection implements IPetCollection {
    private petCollection: AnimalType[];

    constructor(petCollection: AnimalType[] = []) {

        this.petCollection = petCollection;
    }

    get getPetCollection(): AnimalType[] {
        return this.petCollection;
    }

    set setPetCollection(petCollection: AnimalType[]) {
        this.petCollection = petCollection;
    }

    public addPet(pet: AnimalType): string {
        const petNames = this.getPetNames();
        const newPetCollection = [...this.getPetCollection, pet]

        if (petNames.includes(pet.name)) return 'Can\'t add pet name that already exists. Pick another name.'

        this.setPetCollection = newPetCollection;

        return `Pet ${pet.name} added.`;
    }

    removePet(name: string) {
        const petNames = this.getPetNames();

        if (!petNames.includes(name)) return 'Can\'t remove non existant pet.'

        const newPetCollection = [...this.getPetCollection].filter((pet: any) => name !== pet.name)

        this.setPetCollection = newPetCollection;

        return `Pet ${name} added.`;
    }

    getPetNames(): string[] {
        return this.petCollection.map((pet: any) => pet.name);
    }
}

export default PetCollection;