import Bird from '../../../abstract/Bird';
import { IRunnable, IWalkable } from '../../../interfaces/Move';
import * as Move from '../../../util/move';

class Ostrich extends Bird implements IWalkable, IRunnable {
    walk(): string {
        return Move.walk();
    }

    run(): string {
        return Move.run();
    }

    move(): string {
        return this.walk() + ' and ' + this.run();
    }
}
export default Ostrich;