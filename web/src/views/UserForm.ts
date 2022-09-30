import { User } from './../models/User';


export class UserForm {

  constructor(private parent: HTMLElement, private model: User) {
    this.bindModel();
  }

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });
  };

  eventMap(): { [key: string]: () => void; } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick
    };
  }

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
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <input type="text" />
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventMap = this.eventMap();

    for (const eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  public render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }

}


