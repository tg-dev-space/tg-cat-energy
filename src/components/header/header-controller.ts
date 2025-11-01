import { route } from '../../app';
import HeaderView from './header-view';

export default class HeaderController {
  constructor(private readonly view: HeaderView) {
    this.handleRouteNav();
  }

  private handleRouteNav(): void {
    this.handleClickNav(this.view.homeLink);
    this.handleClickNav(this.view.catalogLink);
    this.handleClickNav(this.view.programsLink);
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
