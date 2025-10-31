import { createElement } from '../../../../utils/create-element';

interface StepsItem {
  icon: string;
  step: string;
  description: string;
}

export default class StepsView {
  private readonly section: HTMLElement;
  private readonly list: HTMLUListElement;

  constructor() {
    this.section = createElement('section', { classNames: ['steps', 'container'] });
    this.list = createElement('ul', { classNames: ['list'] });
  }

  public render(): HTMLElement {
    createElement('h2', { classNames: ['title'], content: 'Как это работает', parent: this.section });

    this.createItem({
      icon: 'icon--leaf',
      step: '1',
      description: 'Функциональное питание содержит только полезные питательные вещества.',
    });
    this.createItem({
      icon: 'icon--tub',
      step: '2',
      description: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
    });
    this.createItem({
      icon: 'icon--eat',
      step: '3',
      description: 'Замените один-два приема обычной еды на наше функциональное питание.',
    });
    this.createItem({
      icon: 'icon--alarm',
      step: '4',
      description: 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!',
    });

    this.section.append(this.list);
    return this.section;
  }

  private createItem(props: StepsItem): void {
    const { icon, step, description } = props;

    const item = createElement('li', { classNames: ['item'], parent: this.list });
    createElement('div', { classNames: ['icon', icon], parent: item });
    createElement('span', { classNames: ['step'], content: step, parent: item });
    createElement('p', { classNames: ['description'], content: description, parent: item });
  }
}
