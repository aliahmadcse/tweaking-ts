import axios, { AxiosPromise } from 'axios';


export interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {

  public constructor(private rootUrl: string) { }

  /**
   *
   */
  public fetch(id: number,): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  /**
   *
   */
  public save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
