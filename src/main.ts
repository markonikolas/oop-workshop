import BirdFactory from './abstract/Factory'

(function () {

    const Noah = BirdFactory.setBirdProps({ name: 'Noah', breed: 'default' }).createBird('ostrich');
    const Tux = BirdFactory.setBirdProps({ name: 'Noah', breed: 'default' }).createBird('penguin');
    const GIJoe = BirdFactory.setBirdProps({ name: 'Noah', breed: 'default' }).createBird('pigeon');

    console.log({ Noah, Tux, GIJoe })


})()