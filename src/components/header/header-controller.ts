import { route } from '../../app';
import HeaderView from './header-view';

export default class HeaderController {
  constructor(private readonly view: HeaderView) {
    this.handleRouteNav();
    this.handleOverlayHeader();
  }

  private handleRouteNav(): void {
    this.handleClickNav(this.view.homeLink);
    this.handleClickNav(this.view.catalogLink);
    this.handleClickNav(this.view.programsLink);
  }

  private handleOverlayHeader(): void {
    const toggleOverlay = (): void => {
      console.log('🚀 ~ HeaderController ~ toggleOverlay ~ location.pathname:', location.pathname);
      this.view.header.classList.toggle('overlay', location.pathname === '/' && window.innerWidth >= 1200);
    };

    toggleOverlay();

    window.addEventListener('resize', toggleOverlay);
    route.onRouteChange(toggleOverlay);
  }

  private handleClickNav(link: HTMLAnchorElement): void {
    link.addEventListener('click', (event) => {
      this.view.getNavLinks().forEach((anchor) => {
        anchor.classList.remove('active');

        link.classList.add('active');
      });
      route.navigate(event);
    });
  }
}
