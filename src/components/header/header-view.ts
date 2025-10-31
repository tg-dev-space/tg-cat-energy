import { createElement } from '../../utils/create-element';
import logo from '../../assets/images/logo.svg';

export default class HeaderView {
  private readonly header: HTMLElement;
  private readonly headerWrapper: HTMLElement;
  private readonly buttonBurger: HTMLButtonElement;

  constructor() {
    this.header = createElement('header', { classNames: ['header', 'container'] });
    this.headerWrapper = createElement('div', { classNames: ['header-wrapper'], parent: this.header });
    this.buttonBurger = createElement('button', { classNames: ['burger'], attributes: { type: 'button' } });
  }

  public render(): HTMLElement {
    this.createLogo();
    this.createNav();

    return this.header;
  }

  private createLogo(): void {
    const logoContainer = createElement('div', { classNames: ['logo-container'], parent: this.headerWrapper });
    const link = createElement('a', { classNames: ['logo-link'], attributes: { href: '/' }, parent: logoContainer });
    createElement('img', {
      attributes: { src: logo, alt: 'Логотип' },
      parent: link,
    });
  }

  private createNav(): void {
    const navWrapper = createElement('div', {
      classNames: ['nav-wrapper'],
      parent: this.headerWrapper,
    });

    navWrapper.append(this.buttonBurger);

    for (let i = 0; i < 3; i++) {
      createElement('span', {
        classNames: ['burger-line'],
        parent: this.buttonBurger,
      });
    }

    const nav = createElement('nav', {
      classNames: ['nav'],
      parent: navWrapper,
    });

    createElement('a', {
      classNames: ['nav-link', 'active'],
      content: 'Главная',
      attributes: { href: '/' },
      parent: nav,
    });
    createElement('a', {
      classNames: ['nav-link'],
      content: 'Каталог продукции',
      attributes: { href: '/catalog' },
      parent: nav,
    });
    createElement('a', {
      classNames: ['nav-link'],
      attributes: { href: '/programs' },
      content: 'Подбор программы',
      parent: nav,
    });
  }
}
