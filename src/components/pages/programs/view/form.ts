import { FormElements, InputContent } from '../../../../types/view-components';
import { createElement } from '../../../../utils/create-element';
import Additionally from './additionally';
import Comments from './comments';
import DataPet from './data-pet';
import Owner from './owner';

export default class FormView {
  public readonly form: HTMLElement;
  public readonly formElements: Partial<FormElements> = {};

  constructor() {
    this.form = createElement('form', { classNames: ['form'] });
  }

  public render(): HTMLElement {
    const wrapper = createElement('div', { classNames: ['wrapper-title', 'container'], parent: this.form });
    const section = createElement('section', { classNames: ['programs'] });
    createElement('h1', { classNames: ['title'], content: 'Подбор программы', parent: wrapper });
    createElement('p', {
      classNames: ['description'],
      content: 'Заполните анкету, и мы подберем программу питания для вашего кота',
      parent: wrapper,
    });

    new DataPet(this).render();
    new Owner(this).render();
    new Comments(this).render();
    new Additionally(this).render();

    this.createSubmitButton();

    section.append(this.form);

    return section;
  }

  public createInputWrapper = (props: InputContent): HTMLElement => {
    const { id, label, labelAttributes, inputAttributes, wrapperClassNames } = props;

    const wrapper = createElement('div', { classNames: ['wrapper-input', ...(wrapperClassNames ?? '')] });

    createElement('label', {
      classNames: ['label'],
      attributes: labelAttributes,
      content: label,
      parent: wrapper,
    });
    const input = createElement('input', {
      classNames: ['input'],
      attributes: inputAttributes,
      parent: wrapper,
    });

    this.formElements[id] = input;

    return wrapper;
  };

  private createSubmitButton(): void {
    const wrapper = createElement('div', { classNames: ['wrapper-button', 'container'] });

    createElement('button', {
      classNames: ['submit-button'],
      attributes: {
        type: 'submit',
      },
      content: 'отправить заявку',
      parent: wrapper,
    });

    createElement('p', { classNames: ['text-required'], content: '* — Обязательные поля', parent: wrapper });

    this.form.append(wrapper);
  }
}
