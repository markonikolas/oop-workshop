import INamable from '../interfaces/Namable';

abstract class Bird implements INamable {
    private bname: string;
    private bbreed: string;

    constructor(bird: any) {
        const { name, breed } = bird;
        this.bname = name;
        this.bbreed = breed;
    }

    get name(): string {
        return this.bname;
    };

    set name(name: string) {
        this.bname = name;
    };

    get breed(): string {
        return this.bbreed;
    };

    set breed(breed: string) {
        this.bbreed = breed;
    };

    abstract move(): string;
}

export default Bird;