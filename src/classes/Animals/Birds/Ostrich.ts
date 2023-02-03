import Bird from '../../../abstract/Bird';
import { IRuns, IWalks } from '../../../interfaces/Move';

class Ostrich extends Bird implements IWalks, IRuns {
    walk(): string {
        return 'I can move by walking.';
    }

    run(): string {
        return 'I can move by running.';
    }

    move(): string {
        return this.walk() + ' and ' + this.run();
    }
}
export default Ostrich;