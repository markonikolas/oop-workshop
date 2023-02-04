import Bird from '../../../abstract/Bird';
import { ISlidable, IWalkable } from '../../../interfaces/Move';
import * as Move from '../../../util/move';

class Penguin extends Bird implements ISlidable, IWalkable {
    slide(): string {
        return Move.slide();
    }

    walk(): string {
        return Move.walk();
    }

    move(): string {
        return this.slide() + ' and ' + this.walk();
    }
}

export default Penguin;