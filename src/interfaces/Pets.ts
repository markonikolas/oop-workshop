import { PetType } from '../types';

export interface IPetCollection {
    get getPetCollection(): PetType[]

    set setPetCollection(petCollection: PetType[])
}