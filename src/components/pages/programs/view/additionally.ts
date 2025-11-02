import { createElement } from '../../../../utils/create-element';
import FormView from './form';

export default class Additionally {
  constructor(private readonly formView: FormView) {}

  public render(): void {
    this.createSection();
  }

  public createSection(): void {
    const additionallyWrapper = createElement('div', {
      classNames: ['additionally-section', 'form-section', 'container'],
      parent: this.formView.form,
    });

    createElement('h3', {
      classNames: ['section-title'],
      content: 'Дополнительно',
      parent: additionallyWrapper,
    });

    this.createCheckbox(additionallyWrapper, 'sweetener', 'сахарозаменитель');
    this.createCheckbox(additionallyWrapper, 'water', 'питьевая вода');
    this.createCheckbox(additionallyWrapper, 'milk', 'молоко');
    this.createCheckbox(additionallyWrapper, 'vitamins', 'витамины');
  }

  private createCheckbox(parent: HTMLElement, name: string, label: string): void {
    const wrapper = createElement('div', { classNames: ['checkbox-wrapper'] });

    const inputId = `checkbox-${name}`;

    const checkbox = createElement('input', {
      classNames: ['checkbox'],
      attributes: {
        id: inputId,
        type: 'checkbox',
        name,
      },
      parent: wrapper,
    });

    createElement('label', {
      classNames: ['checkbox-label'],
      attributes: { for: inputId },
      content: label,
      parent: wrapper,
    });

    this.formView.formElements[name] = checkbox;
    parent.appendChild(wrapper);
  }
}
