import { InputContent } from '../../../../types/view-components';
import { createElement } from '../../../../utils/create-element';
import FormView from './form';

export default class Comments {
  constructor(private readonly formView: FormView) {}

  public render(): void {
    this.createSection();
  }

  private createSection(): void {
    const commentsWrapper = createElement('div', {
      classNames: ['comments-section', 'form-section', 'container'],
      parent: this.formView.form,
    });

    createElement('h3', {
      classNames: ['section-title'],
      content: 'Комментарий',
      parent: commentsWrapper,
    });

    const commentTextarea = this.createTextareaWrapper({
      id: 'comment',
      label: '',
      labelAttributes: {},
      inputAttributes: {
        id: 'comments',
        name: 'comments',
        placeholder: 'Расскажите обо всех повадках кота',
        rows: '4',
      },
    });

    commentsWrapper.appendChild(commentTextarea);
  }

  private createTextareaWrapper(props: InputContent): HTMLElement {
    const { id, label, labelAttributes, inputAttributes } = props;

    const wrapper = createElement('div', { classNames: ['wrapper-textarea'] });

    if (label) {
      createElement('label', {
        classNames: ['label'],
        attributes: labelAttributes,
        content: label,
        parent: wrapper,
      });
    }

    const textarea = createElement('textarea', {
      classNames: ['textarea'],
      attributes: inputAttributes,
      parent: wrapper,
    });

    this.formView.formElements[id] = textarea;
    return wrapper;
  }
}
