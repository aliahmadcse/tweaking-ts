import { AxiosResponse } from 'axios';
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

  public set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  public fetch(): void {
    const id = this.get("id");
    if (!id) {
      throw new Error("Can't fetch user without id");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  public save() {
    this.sync.save(this.attributes.getAll()).
      then((response: AxiosResponse): void => {
        this.trigger('save');
      }).catch(() => {
        this.trigger('error');
      });
  }
}
