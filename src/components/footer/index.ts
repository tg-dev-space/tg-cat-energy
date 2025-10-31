import FooterView from './footer-view';

export default class Footer {
  private readonly view: FooterView;

  constructor() {
    this.view = new FooterView();
  }

  public render(): HTMLElement {
    const headerElement = this.view.render();
    return headerElement;
  }
}
