import Bird from '../../abstract/Bird';
import { ISlides, IWalks } from '../../interfaces/Move';

class Penguin extends Bird implements ISlides, IWalks {
    slide(): string {
        return 'I move by sliding.'
    }

    walk(): string {
        return 'I move by walking.'
    }

    move(): string {
        return this.slide() + ' ' + this.walk();
    }
}

export default Penguin;