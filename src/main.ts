import BirdFactory from './abstract/Factory'

(function () {

    const Noah = BirdFactory.createBird('ostrich', { name: 'Noah', breed: 'default' });
    const Tux = BirdFactory.createBird('penguin', { name: 'Noah', breed: 'default' });
    const GIJoe = BirdFactory.createBird('pigeon', { name: 'Noah', breed: 'default' });

    console.log(Noah.move());

    console.log(Tux.move());

    console.log(GIJoe.move());
})()