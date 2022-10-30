import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps>{

  template(): string {
    return `
        <div>
          <h1>User Form</h1>
          <div>User name: ${this.model.get('name')}</div>
          <div>Age: ${this.model.get('age')}</div>
        </div>
      `;
  }

}

