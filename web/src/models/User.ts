interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  public constructor(private data: UserProps) {}

  /**
   * get a user prop
   * @param propname
   */
  public get(propName: string): number | string {
    return this.data[propName];
  }

  /**
   * update a user prop
   * @param update
   */
  public set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  /**
   * Storing the events
   * @param eventName
   * @param callback
   */
  public on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  /**
   * Triggering of events
   * @param eventName
   */
  public trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => callback());
  }
}
