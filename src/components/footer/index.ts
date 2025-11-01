import FooterView from './footer-view';

export default class Footer {
  private readonly view: FooterView;

  constructor() {
    this.view = new FooterView();
  }

  public render(): HTMLElement {
    const footerElement = this.view.render();

    return footerElement;
  }
}
