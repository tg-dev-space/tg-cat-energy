import { createElement } from '../../utils/create-element';
import logoDesc from '../../assets/images/logo-desc.svg';
import logoMobile from '../../assets/images/logo-mobile.svg';
import logoName from '../../assets/images/logo-name.svg';

export default class HeaderView {
  public readonly homeLink: HTMLAnchorElement;
  public readonly catalogLink: HTMLAnchorElement;
  public readonly programsLink: HTMLAnchorElement;
  public readonly nav: HTMLElement;
  public readonly header: HTMLElement;
  public readonly buttonBurger: HTMLButtonElement;
  private readonly headerWrapper: HTMLElement;

  constructor() {
    this.header = createElement('header', { classNames: ['header', 'container'] });
    this.headerWrapper = createElement('div', { classNames: ['header-wrapper'], parent: this.header });
    this.buttonBurger = createElement('button', { classNames: ['burger'], attributes: { type: 'button' } });
    this.nav = createElement('nav', {
      classNames: ['nav'],
    });
    this.homeLink = createElement('a', {
      classNames: ['nav-link', 'active'],
      content: 'Главная',
      attributes: { href: '/' },
      parent: this.nav,
    });
    this.catalogLink = createElement('a', {
      classNames: ['nav-link'],
      content: 'Каталог продукции',
      attributes: { href: '/catalog' },
      parent: this.nav,
    });
    this.programsLink = createElement('a', {
      classNames: ['nav-link'],
      attributes: { href: '/programs' },
      content: 'Подбор программы',
      parent: this.nav,
    });
  }

  public render(): HTMLElement {
    this.createLogo();
    this.createNav();

    return this.header;
  }

  public getNavLinks = (): HTMLAnchorElement[] => {
    return [this.homeLink, this.catalogLink, this.programsLink];
  };

  private createLogo(): void {
    const logoContainer = createElement('div', { classNames: ['logo-container'], parent: this.headerWrapper });
    const link = createElement('a', { classNames: ['logo-link'], attributes: { href: '/' }, parent: logoContainer });
    const picture = createElement('picture', {
      parent: link,
    });
    createElement('source', {
      attributes: { srcset: logoMobile, media: '(max-width: 480px)' },
      parent: picture,
    });
    createElement('img', {
      attributes: { src: logoDesc, alt: 'Логотип' },
      parent: picture,
    });
    createElement('img', {
      attributes: { src: logoName, alt: 'Логотип' },
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

    navWrapper.append(this.nav);
  }
}
