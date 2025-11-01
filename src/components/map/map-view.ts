import { createElement } from '../../utils/create-element';
import { type YMap, type YMapLocationRequest } from 'ymaps3';
import MapController from './map-controller';
import { MAP_LOCATION_CENTER, MAP_LOCATION_RIGHT, MAP_ZOOM_DESKTOP, MAP_ZOOM_MOBILE } from '../../constants/map';

export default class MapView {
  public map: YMap | null;
  private readonly mapContainer: HTMLElement;

  constructor() {
    this.mapContainer = createElement('section', { classNames: ['map'] });
    this.map = null;
  }

  public render(): HTMLElement {
    this.createContacts();
    this.initMap();

    return this.mapContainer;
  }

  private async initMap(): Promise<void> {
    await ymaps3.ready;

    const LOCATION: YMapLocationRequest = {
      center: window.innerWidth <= 992 ? MAP_LOCATION_CENTER : MAP_LOCATION_RIGHT,
      zoom: window.innerWidth <= 480 ? MAP_ZOOM_MOBILE : MAP_ZOOM_DESKTOP,
    };

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    this.map = new YMap(this.mapContainer, { location: LOCATION });
    this.map.addChild(new YMapDefaultSchemeLayer({}));

    this.addMarker();

    new MapController(this.map);
  }

  private addMarker(): void {
    if (!this.map) {
      return;
    }

    const { YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    this.map.addChild(new YMapDefaultFeaturesLayer({}));
    const markerIcon = createElement('div', { classNames: ['marker'] });

    const marker = new YMapMarker(
      {
        coordinates: MAP_LOCATION_CENTER,
        draggable: false,
      },
      markerIcon
    );

    this.map.addChild(marker);
  }

  private createContacts(): void {
    const wrapper = createElement('div', { classNames: ['contacts'], parent: this.mapContainer });
    createElement('h3', { classNames: ['title'], content: 'приглашаем к сотрудничеству дилеров!', parent: wrapper });
    const address = createElement('div', { classNames: ['address'], parent: wrapper });
    createElement('div', { classNames: ['street'], content: 'ул. Большая Конюшенная, д. 19/8', parent: address });
    createElement('div', { classNames: ['country'], content: 'Санкт-Петербург', parent: address });
  }
}
