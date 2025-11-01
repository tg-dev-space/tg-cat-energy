import { createElement } from '../../../utils/create-element';
import MapView from '../../map/map-view';
import CatalogView from './view/catalog-view';

export default class CatalogPage {
  private readonly mapView: MapView;
  private readonly catalogView: CatalogView;

  constructor() {
    this.catalogView = new CatalogView();
    this.mapView = new MapView();
  }

  public render(): HTMLElement {
    const wrapper = createElement('div', { classNames: ['catalog-page'] });
    const titleWrapper = createElement('div', { classNames: ['title-wrapper', 'container'] });
    createElement('h2', { classNames: ['catalog-title'], content: 'Каталог продукции', parent: titleWrapper });

    const catalog = this.catalogView.render();
    const map = this.mapView.render();

    wrapper.append(titleWrapper, catalog, map);

    return wrapper;
  }
}
