import { AxiosPromise, AxiosResponse } from 'axios';


export type Callback = () => void;

export interface HasId {
  id?: number;
}

export interface ModelAttributes<T> {

  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}


export interface Sync<T> {

  fetch(id: number): AxiosPromise;

  save(data: T): AxiosPromise;
}


export interface Events {
  on(eventName: string, callback: Callback): void;

  trigger(eventName: string): void;
}


export class Model<T extends HasId> {
  protected constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }

  public on = this.events.on;
  public trigger = this.events.trigger;
  public get = this.attributes.get;

  public set(update: T): void {
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



