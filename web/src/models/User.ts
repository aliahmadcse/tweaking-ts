import { Attributes } from './Attributes';
import { Eventing } from "./Eventing";
import { Sync } from './Sync';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(rootUrl);
  public attributes: Attributes<UserProps>;

  public constructor(data: UserProps) {
    this.attributes = new Attributes(data);
  }

  public get on() {
    return this.events.on;
  }

  public get trigger() {
    return this.events.trigger;
  }

  public get get() {
    return this.attributes.get;
  }
}
