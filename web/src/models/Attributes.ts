
export class Attributes<T extends {}> {
  public constructor(private data: T) { }

  /**
   * get a user prop
   * @param key - key of the prop to get the value of
   */
  public get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  /**
   * update one or more user prop(s)
   * @param update - the updated prop(s)
   */
  public set(update: T): void {
    Object.assign(this.data, update);
  }

  public getAll(): T {
    return this.data;
  }
}

