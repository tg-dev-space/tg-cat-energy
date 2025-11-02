import HeaderController from './header-controller';
import HeaderView from './header-view';

export default class Header {
  private readonly view: HeaderView;

  constructor() {
    this.view = new HeaderView();
  }

  public render(): HTMLElement {
    const headerElement = this.view.render();
    new HeaderController(this.view);
    return headerElement;
  }
}
