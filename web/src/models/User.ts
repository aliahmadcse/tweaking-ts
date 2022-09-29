import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Model } from './Model';


interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";


export class User extends Model<UserProps> {

  public static buildUser(attrs: UserProps) {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }
}
