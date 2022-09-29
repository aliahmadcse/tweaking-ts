import { Collection } from './Collection';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Model } from './Model';


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";


export class User extends Model<UserProps> {

  public static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }

  public static buildUserCollection() {
    return new Collection<User, UserProps>(rootUrl, User.buildUser);
  }
}
