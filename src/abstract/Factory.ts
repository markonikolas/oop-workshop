import Ostrich from '../classes/Animals/Birds/Ostrich';
import Penguin from '../classes/Animals/Birds/Penguin';
import Pigeon from '../classes/Animals/Birds/Pigeon';

class BirdFactory {

    static createBird(prop: any, bird: any) {
        switch (prop) {
            case 'penguin':
                return new Penguin(bird);

            case 'ostrich':
                return new Ostrich(bird);

            case 'pigeon':
                return new Pigeon(bird);

            default:
                throw new TypeError(`There is no type ${prop}.`)
        }
    }
}

export default BirdFactory;
