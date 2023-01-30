import Cat from './classes/animals/Cat';
import Dog from './classes/animals/Dog';

export type Namable = {
    name: string;
}

export type DogBreed = {
    breed: 'Mutt' | 'Husky' | 'German Shepard' | 'Akita' | 'Bulldog'
}

export type CatBreed = {
    breed: 'Persian' | 'Russian blue' | 'Chartreux' | 'Foldex' | 'Havana Brown'
}

export type CatType = Namable & CatBreed;

export type DogType = Namable & DogBreed;

export type AnimalType = DogType | CatType;

export type PetType = Cat | Dog;