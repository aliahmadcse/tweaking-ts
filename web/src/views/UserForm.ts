

export class UserForm {
  
  constructor(private parent: Element) {

  }


  public template() {
    return `
      <div>
        <h1>User Form</h1>
        <input type="text" />
      </div>
    `;
  }

  public render() {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }

}


