import Bird from '../../../abstract/Bird';
import { IFlies, IWalks } from '../../../interfaces/Move';

import * as Move from '../../../util/move';

class Pigeon extends Bird implements IFlies, IWalks {
    walk(): string {
        return Move.walk();
    }

    fly(): string {
        return Move.fly();
    }

    move(): string {
        return this.fly() + ' and ' + this.walk();
    }
}

export default Pigeon;