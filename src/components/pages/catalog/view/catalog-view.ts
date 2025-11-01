import { CATALOG } from '../../../../constants/catalog';
import { CatalogItem } from '../../../../types/view-components';
import { createElement } from '../../../../utils/create-element';

export default class CatalogView {
  private readonly section: HTMLElement;

  constructor() {
    this.section = createElement('section', { classNames: ['catalog', 'container'] });
  }

  public render(): HTMLElement {
    this.createList();

    return this.section;
  }

  private createList(): void {
    const list = createElement('ul', { classNames: ['list'], parent: this.section });
    CATALOG.forEach((item) => {
      const product = this.createItem(item);
      list.append(product);
    });

    const lastItem = this.createLastItem();
    list.append(lastItem);
  }

  private createItem(data: CatalogItem): HTMLLIElement {
    const item = createElement('li', { classNames: ['item'] });

    createElement('img', {
      classNames: ['image'],
      attributes: { src: data.image.src, alt: data.image.alt },
      parent: item,
    });
    createElement('h3', {
      classNames: ['title'],
      content: data.title,
      parent: item,
    });

    const info = createElement('div', {
      classNames: ['info-wrapper'],
      parent: item,
    });

    data.info.forEach((content) => {
      const contentWrapper = createElement('div', {
        classNames: ['content'],
        parent: info,
      });
      createElement('span', {
        classNames: ['label'],
        content: content.label,
        parent: contentWrapper,
      });
      createElement('span', {
        classNames: ['value'],
        content: content.value,
        parent: contentWrapper,
      });
    });

    createElement('button', {
      classNames: ['button'],
      attributes: { type: 'button' },
      content: 'заказать',
      parent: item,
    });

    return item;
  }

  private createLastItem(): HTMLLIElement {
    const item = createElement('li', { classNames: ['item'] });

    const plus = createElement('div', {
      classNames: ['plus'],
      parent: item,
    });
    createElement('span', {
      classNames: ['plus-line'],
      parent: plus,
    });
    createElement('span', {
      classNames: ['plus-line'],
      parent: plus,
    });

    createElement('h3', {
      classNames: ['title'],
      content: 'Показать еще 100500 товаров',
      parent: item,
    });

    createElement('p', {
      classNames: ['description'],
      content: 'На самом деле вкусов гораздо больше!',
      parent: item,
    });

    createElement('button', {
      classNames: ['button'],
      attributes: { type: 'button' },
      content: 'показать все',
      parent: item,
    });

    return item;
  }
}
