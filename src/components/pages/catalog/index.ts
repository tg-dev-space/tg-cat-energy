import { createElement } from '../../../utils/create-element';
import MapView from '../../map/map-view';
import AdditionalProductsView from './view/additional-products';
import CatalogView from './view/catalog-view';

export default class CatalogPage {
  private readonly mapView: MapView;
  private readonly catalogView: CatalogView;
  private readonly additionalProductsView: AdditionalProductsView;

  constructor() {
    this.catalogView = new CatalogView();
    this.additionalProductsView = new AdditionalProductsView();
    this.mapView = new MapView();
  }

  public render(): HTMLElement {
    const wrapper = createElement('div', { classNames: ['catalog-page'] });
    const titleWrapper = createElement('div', { classNames: ['title-wrapper', 'container'] });
    createElement('h2', { classNames: ['catalog-title'], content: 'Каталог продукции', parent: titleWrapper });

    const catalog = this.catalogView.render();
    const additionalProducts = this.additionalProductsView.render();
    const map = this.mapView.render();

    wrapper.append(titleWrapper, catalog, additionalProducts, map);

    return wrapper;
  }
}
