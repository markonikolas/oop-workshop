import { AnimalType } from '../types';

export interface IPetCollection {
    get getPetCollection(): AnimalType[]

    set setPetCollection(petCollection: AnimalType[])
}