import { createElement } from '../../../../utils/create-element';

interface ProgramItem {
  title: string;
  description: string;
  href: string;
  linkContent: string;
  background: string;
}

export default class NutritionProgramsView {
  private readonly section: HTMLElement;
  private readonly list: HTMLUListElement;

  constructor() {
    this.section = createElement('section', { classNames: ['nutrition-programs', 'container'] });
    this.list = createElement('ul', { classNames: ['list'], parent: this.section });
  }

  public render(): HTMLElement {
    this.createItem({
      title: 'похудение',
      description:
        'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
      href: '/',
      linkContent: 'каталог slim',
      background: 'image--cat-back',
    });
    this.createItem({
      title: 'набор массы',
      description:
        'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
      href: '/',
      linkContent: 'каталог pro',
      background: 'image--cat-back-2',
    });

    return this.section;
  }

  private createItem(props: ProgramItem): void {
    const { title, description, href, linkContent, background } = props;

    const item = createElement('li', { classNames: ['item'], parent: this.list });
    const content = createElement('div', {
      classNames: ['item-content'],
      parent: item,
    });
    createElement('h2', {
      classNames: ['title'],
      content: title,
      parent: content,
    });
    createElement('p', {
      classNames: ['description'],
      content: description,
      parent: content,
    });
    createElement('hr', { classNames: ['separator'], parent: content });

    const link = this.createLink(href, linkContent);

    content.append(link);

    createElement('div', {
      classNames: ['image', background],
      parent: item,
    });
  }

  private createLink(href: string, linkContent: string): HTMLElement {
    const link = createElement('a', {
      classNames: ['link'],
      attributes: { href },
    });

    createElement('span', {
      classNames: ['link-content'],
      attributes: { href },
      content: linkContent,
      parent: link,
    });

    createElement('span', {
      classNames: ['link-arrow--line'],
      parent: link,
    });
    createElement('span', {
      classNames: ['link-arrow--tip'],
      parent: link,
    });

    return link;
  }
}
