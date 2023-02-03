import Ostrich from '../classes/Animals/Birds/Ostrich';
import Penguin from '../classes/Animals/Birds/Penguin';
import Pigeon from '../classes/Animals/Birds/Pigeon';

class BirdFactory {
    private static birdProps: any;

    static createBird(prop: any) {
        const bird = this.birdProps;

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

    static setBirdProps(props: any) {
        this.birdProps = props;

        return this;
    }
}

export default BirdFactory;
