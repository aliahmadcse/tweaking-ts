import { HasId, Model } from '../models/Model';



export abstract class View<T extends Model<K>, K extends HasId> {

  regions: { [key: string]: Element; } = {};

  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });
  };

  regionsMap(): { [key: string]: string; } {
    return {};
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

  eventMap(): { [key: string]: () => void; } {
    return {};
  }

  abstract template(): string;

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element)
        this.regions[key] = element;
    }
  }

  onRender(): void { }

  public render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
