import { IPetCollection } from '../interfaces/Pets';
import { PetType } from '../types';

class PetCollection implements IPetCollection {
    private petCollection: PetType[];

    constructor(petCollection: PetType[] = []) {

        this.petCollection = petCollection;
    }

    get getPetCollection(): PetType[] {
        return this.petCollection;
    }

    set setPetCollection(petCollection: PetType[]) {
        this.petCollection = petCollection;
    }

    public addPet(pet: PetType): string {
        const petNames = this.getPetNames();
        const newPetCollection = [...this.getPetCollection, pet]

        if (petNames.includes(pet.getName)) return 'Can\'t add pet name that already exists. Pick another name.'

        this.setPetCollection = newPetCollection;

        return `Pet ${pet.getName} added.`;
    }

    public removePet(name: string) {
        const petNames = this.getPetNames();

        if (!petNames.includes(name)) return 'Can\'t remove non existant pet.'

        const newPetCollection = [...this.getPetCollection].filter((pet: any) => name !== pet.name)

        this.setPetCollection = newPetCollection;

        return `Pet ${name} added.`;
    }

    public getPetNames(): string[] {
        return this.petCollection.map((pet: any) => pet.name);
    }
}

export default PetCollection;