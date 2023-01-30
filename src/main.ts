import Cat from './classes/animals/Cat'
import Dog from './classes/animals/Dog';
import Owner from './classes/Owner';
import PetCollection from './classes/PetCollection';

(function () {

    const cat = new Cat({
        name: 'mittens',
        breed: 'Persian'
    });

    const dog = new Dog({
        name: 'buddy',
        breed: 'German Shepard'
    });

    const petCollection = new PetCollection();

    petCollection.addPet(cat);
    petCollection.addPet(dog);

    const john = new Owner({ name: 'John Doe' }, petCollection);

    const duplicateMittens = john.petCollection.addPet(cat);
    console.log(duplicateMittens)

    const removeBuddy = john.petCollection.removePet('buddy');

    console.log(john.petCollection)
})()