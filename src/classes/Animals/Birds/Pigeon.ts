import Bird from '../../../abstract/Bird';
import { IFlyable, IWalkable } from '../../../interfaces/Move';
import * as Move from '../../../util/move';

class Pigeon extends Bird implements IFlyable, IWalkable {
    fly(): string {
        return Move.fly();
    }

    move(): string {
        return this.fly() + ' and ' + this.walk();
    }
}

export default Pigeon;