import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';


export class Collection<T, K> {

  model: T[] = [];

  events: Eventing = new Eventing();

  public constructor(
    private rootUrl: string,
    private deserialize: (json: K) => T
  ) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.model.push(this.deserialize(value));
        });
      });

    this.trigger("change");
  }
}




