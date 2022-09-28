type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Callback[]; } = {};

  /**
   * Storing the events
   * @param eventName
   * @param callback
   */
  public on = (eventName: string, callback: Callback): void => {
    console.log(this);
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  /**
   * Triggering of events
   * @param eventName
   */
  public trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => callback());
  };
}
