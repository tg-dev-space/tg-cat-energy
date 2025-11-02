import MapView from './map-view';

export default class Map {
  private readonly map: MapView;

  constructor() {
    this.map = new MapView();
  }

  public render(): HTMLElement {
    const mapElement = this.map.render();
    return mapElement;
  }
}
