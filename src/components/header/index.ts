import HeaderView from './header-view';

export default class Header {
  private readonly view: HeaderView;

  constructor() {
    this.view = new HeaderView();
  }

  public render(): HTMLElement {
    const headerElement = this.view.render();
    return headerElement;
  }
}
