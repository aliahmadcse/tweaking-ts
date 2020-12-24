import * as faker from "faker";
import { MappAble } from "./MappableInterface";

export class User implements MappAble {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    public markerContent(): string {
        return `User Name: ${this.name}`;
    }
}
