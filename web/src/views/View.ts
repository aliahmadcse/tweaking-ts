import { HasId, Model } from '../models/Model';



export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(protected parent: HTMLElement, protected model: T) {
    this.bindModel();
  }

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });
  };


  bindEvents(fragment: DocumentFragment): void {
    const eventMap = this.eventMap();

    for (const eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  abstract eventMap(): { [key: string]: () => void; };

  abstract template(): string;

  public render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
