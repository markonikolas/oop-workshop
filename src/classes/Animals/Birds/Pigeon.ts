import Bird from '../../../abstract/Bird';
import { IFlies, IWalks } from '../../../interfaces/Move';

class Pigeon extends Bird implements IFlies, IWalks {
    get name(): string {
        throw new Error('Method not implemented.');
    }

    set name(name: string) {
        throw new Error('Method not implemented.');
    }

    walk(): string {
        return 'I can move by walking.';
    }

    fly(): string {
        return 'I can move by flying.'
    }

    move(): string {
        return this.walk() + ' and ' + this.fly();
    }
}

export default Pigeon;