import { User, UserProps } from './../models/User';
import { View } from './View';


export class UserForm extends View<User, UserProps> {

  eventMap(): { [key: string]: () => void; } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveModelClick,
    };
  }

  onSaveModelClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const inputEle = this.parent.querySelector('input');
    if (inputEle) {
      const name = inputEle.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  public template(): string {
    return `
      <div>
        <input type="text" placeholder="${this.model.get('name')}" />
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }

}


