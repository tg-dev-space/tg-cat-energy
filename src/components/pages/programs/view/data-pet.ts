import { createElement } from '../../../../utils/create-element';
import FormView from './form';

export default class DataPet {
  constructor(private readonly formView: FormView) {}

  public render(): void {
    const wrapper = createElement('div', { classNames: ['wrapper-personal', 'container'], parent: this.formView.form });
    wrapper.append(this.createDataPet(), this.createGoal());
  }

  private createDataPet(): HTMLElement {
    const dataPetWrapper = createElement('div', { classNames: ['data-pet'] });

    const nameInput = this.formView.createInputWrapper({
      id: 'name',
      label: 'ИМЯ:*',
      labelAttributes: { for: 'pet-name' },
      inputAttributes: {
        id: 'pet-name',
        type: 'text',
        name: 'pet-name',
        placeholder: 'барсик',
      },
    });

    const weightInput = this.formView.createInputWrapper({
      id: 'weight',
      label: 'Вес (кг):*',
      labelAttributes: { for: 'pet-weight' },
      inputAttributes: {
        id: 'pet-weight',
        type: 'number',
        name: 'pet-weight',
        placeholder: '7',
      },
    });
    const ageInput = this.formView.createInputWrapper({
      id: 'age',
      label: 'ВОЗРАСТ (ЛЕТ):',
      labelAttributes: { for: 'pet-age' },
      inputAttributes: {
        id: 'pet-age',
        type: 'number',
        name: 'pet-age',
        placeholder: '7',
      },
    });

    dataPetWrapper.append(nameInput, weightInput, ageInput);

    return dataPetWrapper;
  }

  private createGoal(): HTMLElement {
    const goalWrapper = createElement('div', {
      classNames: ['wrapper-goal'],
    });

    this.createRadioButton(goalWrapper, 'goal', 'weight-loss', 'похудение', true);
    this.createRadioButton(goalWrapper, 'goal', 'weight-gain', 'набор массы');
    this.createRadioButton(goalWrapper, 'goal', 'unknown', 'Не знаю (Нужен ваш совет)');

    return goalWrapper;
  }

  private createRadioButton(
    parent: HTMLElement,
    name: string,
    value: string,
    label: string,
    checked: boolean = false
  ): void {
    const wrapper = createElement('div', { classNames: ['wrapper-radio'] });

    const inputId = `radio-${name}-${value}`;

    const radio = createElement('input', {
      classNames: ['radio'],
      attributes: {
        id: inputId,
        type: 'radio',
        name,
        value,
        checked: checked ? 'true' : 'false',
      },
      parent: wrapper,
    });

    createElement('label', {
      classNames: ['label'],
      attributes: { for: inputId },
      content: label,
      parent: wrapper,
    });

    this.formView.formElements[value] = radio;
    parent.appendChild(wrapper);
  }
}
