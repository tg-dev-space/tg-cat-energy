import { ADD_PRODUCTS } from '../../../../constants/catalog';
import { CatalogItemAdditional } from '../../../../types/view-components';
import { createElement } from '../../../../utils/create-element';

export default class AdditionalProductsView {
  private readonly section: HTMLElement;

  constructor() {
    this.section = createElement('section', { classNames: ['additional', 'container'] });
  }

  public render(): HTMLElement {
    createElement('h3', { classNames: ['title'], content: 'Дополнительные товары', parent: this.section });
    this.createList();

    return this.section;
  }

  private createList(): void {
    const wrapper = createElement('div', { classNames: ['wrapper'], parent: this.section });
    const list = createElement('ul', { classNames: ['list'], parent: wrapper });

    ADD_PRODUCTS.forEach((item) => {
      const product = this.createItem(item);
      list.append(product);
    });

    const gift = this.createGiftButton();
    wrapper.append(gift);
  }

  private createItem(data: CatalogItemAdditional): HTMLLIElement {
    const item = createElement('li', { classNames: ['item'] });

    createElement('h4', {
      classNames: ['label'],
      content: data.label,
      parent: item,
    });

    createElement('p', {
      classNames: ['value', 'quantity'],
      content: data.quantity,
      parent: item,
    });
    createElement('p', {
      classNames: ['value', 'price'],
      parent: item,
      content: data.price,
    });

    createElement('button', {
      classNames: ['button'],
      attributes: { type: 'button' },
      content: 'заказать',
      parent: item,
    });

    return item;
  }

  private createGiftButton(): HTMLButtonElement {
    const giftButton = createElement('button', { classNames: ['gift'] });

    createElement('p', {
      classNames: ['description'],
      content: 'Закажите все и получите чехол для кота в подарок!',
      parent: giftButton,
    });

    return giftButton;
  }
}
