import Bird from '../../abstract/Bird';
import { IFlies, IWalks } from '../../interfaces/Move';

class Pigeon extends Bird implements IFlies, IWalks {
    walk(): string {
        return 'I can move by walking.';
    }

    fly(): string {
        return 'I can move by flying.'
    }

    move(): string {
        return this.walk() + ' ' + this.fly();
    }
}

export default Pigeon;