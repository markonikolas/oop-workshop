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
