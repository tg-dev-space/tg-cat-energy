import { YMap } from 'ymaps3';
import { MAP_LOCATION_CENTER, MAP_LOCATION_RIGHT, MAP_ZOOM_DESKTOP, MAP_ZOOM_MOBILE } from '../../constants/map';

export default class MapController {
  constructor(private readonly map: YMap) {
    this.handleUpdateLocation();
  }

  private handleUpdateLocation(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 992) {
        this.map.update({
          location: {
            center: MAP_LOCATION_CENTER,
            zoom: window.innerWidth <= 480 ? MAP_ZOOM_MOBILE : MAP_ZOOM_DESKTOP,
          },
        });
      } else {
        this.map.update({
          location: {
            center: MAP_LOCATION_RIGHT,
          },
        });
      }
    });
  }
}
