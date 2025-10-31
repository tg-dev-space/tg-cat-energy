import { createElement } from '../../utils/create-element';
import logo from '../../assets/images/footer-logo.svg';

export default class FooterView {
  private readonly footer: HTMLElement;

  constructor() {
    this.footer = createElement('footer', { classNames: ['footer', 'container'] });
  }

  public render(): HTMLElement {
    const link = createElement('a', {
      classNames: ['link', 'link--logo'],
      attributes: { href: '/' },
      parent: this.footer,
    });
    createElement('img', {
      attributes: { src: logo, alt: 'Логотип' },
      parent: link,
    });
    createElement('hr', {
      classNames: ['separator'],
      parent: this.footer,
    });

    this.createSocialLinks();

    createElement('hr', {
      classNames: ['separator'],
      parent: this.footer,
    });

    this.createLogoCompany();

    return this.footer;
  }

  private createSocialLinks(): void {
    const wrapper = createElement('div', {
      classNames: ['social-links-wrapper'],
      parent: this.footer,
    });

    createElement('a', {
      classNames: ['link', 'link--vk'],
      attributes: { href: 'https://vk.com/', target: '_blank' },
      parent: wrapper,
    });
    createElement('a', {
      classNames: ['link', 'link--instagram'],
      attributes: { href: 'https://www.instagram.com/', target: '_blank' },
      parent: wrapper,
    });
    createElement('a', {
      classNames: ['link', 'link--facebook'],
      attributes: { href: 'https://www.facebook.com/', target: '_blank' },
      parent: wrapper,
    });
  }

  private createLogoCompany(): void {
    const link = createElement('a', {
      classNames: ['link', 'link--company'],
      attributes: { href: 'https://htmlacademy.ru', target: '_blank' },
      content: 'HTML Academy',
      parent: this.footer,
    });
    createElement('span', {
      classNames: ['icon'],
      parent: link,
    });
  }
}
