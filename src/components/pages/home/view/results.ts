import { createElement } from '../../../../utils/create-element';
import catBefore from '../../../../assets/images/cat-before.png';
import catAfter from '../../../../assets/images/cat-after.png';
import SliderController from '../controller/slider-controller';

interface ModuleItem {
  label: string;
  labelClassName: string;
  value: string;
}

export default class ResultsView {
  private readonly section: HTMLElement;
  private readonly inputRange: HTMLInputElement;

  constructor() {
    this.section = createElement('section', { classNames: ['results', 'container'] });
    this.inputRange = createElement('input', {
      classNames: ['controller-input--results'],
      attributes: { type: 'range', name: 'results', min: '0', max: '100', value: '50', step: '1' },
    });
  }

  public render(): HTMLElement {
    createElement('h2', { classNames: ['title'], content: 'Живой пример', parent: this.section });

    this.createContent();
    this.createSlider();

    createElement('div', { classNames: ['results-background--before'], parent: this.section });
    createElement('div', { classNames: ['results-background--after'], parent: this.section });

    return this.section;
  }

  private createContent(): void {
    const content = createElement('div', { classNames: ['results-content'], parent: this.section });
    createElement('div', {
      classNames: ['description'],
      content:
        'Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.',
      parent: content,
    });
    const data = createElement('div', { classNames: ['data'], parent: content });
    const modules = createElement('div', { classNames: ['modules'], parent: data });

    modules.append(
      this.createModule({
        label: 'снижение веса',
        labelClassName: 'label--first',
        value: '5 КГ',
      })
    );

    modules.append(
      this.createModule({ label: 'затрачено времени', labelClassName: 'label--second', value: '60 ДНЕЙ' })
    );

    data.append(this.createPriceWrapper());
  }

  private createModule(props: ModuleItem): HTMLElement {
    const { label, labelClassName, value } = props;

    const module = createElement('div', { classNames: ['module'] });
    createElement('span', { classNames: ['label', labelClassName], content: label, parent: module });
    createElement('p', { classNames: ['value'], content: value, parent: module });

    return module;
  }

  private createPriceWrapper(): HTMLElement {
    const wrapper = createElement('div', { classNames: ['price-wrapper'] });
    createElement('span', { classNames: ['label'], content: 'Затраты на питание: ', parent: wrapper });
    createElement('p', { classNames: ['value'], content: '15 000 РУБ.', parent: wrapper });

    return wrapper;
  }

  private createSlider(): void {
    const slider = createElement('div', { classNames: ['results-slider'], parent: this.section });

    const images = createElement('div', { classNames: ['images'], parent: slider });
    const before = createElement('img', {
      classNames: ['slide', 'slide--before'],
      attributes: { src: catBefore, alt: 'Было' },
      parent: images,
    });
    const after = createElement('img', {
      classNames: ['slide', 'slide--after'],
      attributes: { src: catAfter, alt: 'Стало' },
      parent: images,
    });

    new SliderController(this.inputRange, before, after);

    const controller = createElement('div', { classNames: ['controller'], parent: slider });

    controller.append(this.inputRange);

    createElement('span', {
      classNames: ['label', 'label--before'],
      content: 'было',
      parent: controller,
    });
    createElement('span', {
      classNames: ['label', 'label--after'],
      content: 'стало',
      parent: controller,
    });
  }
}
