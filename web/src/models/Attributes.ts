
export class Attributes<T extends {}> {
  public constructor(private data: T) { }

  /**
   * get a user prop
   * @param propName - key of the property to get the value of
   */
  public get(propName: string): number | string {
    return this.data[propName];
  }

  /**
   * update a user prop
   * @param update
   */
  public set(update: T): void {
    Object.assign(this.data, update);
  }
}
