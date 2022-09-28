
export class Attributes<T extends {}> {
  public constructor(private data: T) { }

  /**
   * get a user prop
   * @param propName - key of the property to get the value of
   */
  public get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  /**
   * update a user prop
   * @param update
   */
  public set(update: T): void {
    Object.assign(this.data, update);
  }
}
