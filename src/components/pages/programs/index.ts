import { createElement } from '../../../utils/create-element';
import MapView from '../../map/map-view';

export default class ProgramsPage {
  private readonly mapView: MapView;

  constructor() {
    this.mapView = new MapView();
  }

  public render(): HTMLElement {
    const wrapper = createElement('div', { classNames: ['catalog-page'] });

    const map = this.mapView.render();

    wrapper.append(map);

    return wrapper;
  }
}
