import { User } from './../models/User';


export class UserForm {

  constructor(private parent: HTMLElement, private model:User) {

  }

  eventMap(): { [key: string]: () => void; } {
    return {
      "click:button": this.onButtonClick
    };
  }

  onButtonClick(): void {
    console.log("Hi, there");

  }


  public template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input type="text" />
        <button>Click Me</button>
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
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }

}


