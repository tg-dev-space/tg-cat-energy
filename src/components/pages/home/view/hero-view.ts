import { createElement } from '../../../../utils/create-element';

export default class HeroView {
  private readonly section: HTMLElement;

  constructor() {
    this.section = createElement('section', { classNames: ['hero', 'container'] });
  }

  public render(): HTMLElement {
    this.createContent();
    createElement('div', { classNames: ['hero-background-cat'], parent: this.section });
    createElement('div', { classNames: ['hero-background-glass'], parent: this.section });

    return this.section;
  }

  private createContent(): void {
    const content = createElement('div', { classNames: ['content'], parent: this.section });
    createElement('h1', {
      classNames: ['title'],
      content: 'Функциональное питание для котов',
      parent: content,
    });
    createElement('p', {
      classNames: ['description'],
      content: 'Занялся собой? Займись котом!',
      parent: content,
    });
    createElement('a', {
      classNames: ['link'],
      attributes: { href: '/' },
      content: 'подобрать программу',
      parent: content,
    });
  }
}
