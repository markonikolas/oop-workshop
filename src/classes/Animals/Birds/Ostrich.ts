import Bird from '../../../abstract/Bird';
import { IRunnable, IWalkable } from '../../../interfaces/Move';
import * as Move from '../../../util/move';

class Ostrich extends Bird implements IWalkable, IRunnable {
    run(): string {
        return Move.run();
    }

    move(): string {
        return this.run() + ' and ' + this.walk();
    }
}
export default Ostrich;