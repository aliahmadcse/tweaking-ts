import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

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
   *
   */
  public fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  /**
   *
   */
  public save(): void {
    const id = this.get("id");
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
