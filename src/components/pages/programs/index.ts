import { createElement } from '../../../utils/create-element';
import MapView from '../../map/map-view';
import FormView from './view/form';

export default class ProgramsPage {
  private readonly formView: FormView;
  private readonly mapView: MapView;

  constructor() {
    this.formView = new FormView();
    this.mapView = new MapView();
  }

  public render(): HTMLElement {
    const wrapper = createElement('div', { classNames: ['programs-page'] });

    const form = this.formView.render();
    const map = this.mapView.render();

    wrapper.append(form, map);

    return wrapper;
  }
}
