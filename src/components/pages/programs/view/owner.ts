import { createElement } from '../../../../utils/create-element';
import FormView from './form';

export default class Owner {
  constructor(private readonly formView: FormView) {}

  public render(): void {
    this.createSection();
  }

  private createSection(): void {
    const ownerWrapper = createElement('div', {
      classNames: ['owner-info', 'form-section', 'container'],
      parent: this.formView.form,
    });

    createElement('h3', {
      classNames: ['section-title'],
      content: 'Контактные данные (владельца кота)',
      parent: ownerWrapper,
    });

    const inputsWrapper = createElement('div', { classNames: ['wrapper-inputs'] });

    const emailInput = this.formView.createInputWrapper({
      id: 'email',
      label: 'E-mail:*',
      labelAttributes: { for: 'owner-email' },
      inputAttributes: {
        id: 'owner-email',
        type: 'email',
        name: 'owner-email',
        placeholder: 'кuklachev@gmail.com',
        required: 'true',
      },
      wrapperClassNames: ['owner-email'],
    });

    const telInput = this.formView.createInputWrapper({
      id: 'tel',
      label: 'Телефон:*',
      labelAttributes: { for: 'owner-tel' },
      inputAttributes: {
        id: 'owner-tel',
        type: 'tel',
        name: 'owner-tel',
        placeholder: '8 (960) 900-60-90',
        required: 'true',
      },
      wrapperClassNames: ['owner-tel'],
    });

    inputsWrapper.append(emailInput, telInput);
    ownerWrapper.append(inputsWrapper);
  }
}
