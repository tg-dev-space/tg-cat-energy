import { route } from '../../app';
import HeaderView from './header-view';

export default class HeaderController {
  private isOpenBurger: boolean = false;

  constructor(private readonly view: HeaderView) {
    this.handleRouteNav();
    this.handleOverlayHeader();
    this.handleToggleBurgerMenu();
  }

  private handleRouteNav(): void {
    this.handleClickNav(this.view.homeLink);
    this.handleClickNav(this.view.catalogLink);
    this.handleClickNav(this.view.programsLink);
  }

  private handleOverlayHeader(): void {
    const toggleOverlay = (): void => {
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
      this.view.buttonBurger.classList.remove('open');
      route.navigate(event);
    });
  }

  private handleToggleBurgerMenu(): void {
    this.view.buttonBurger.addEventListener('click', () => {
      this.isOpenBurger = !this.isOpenBurger;
      this.view.buttonBurger.classList.toggle('open', this.isOpenBurger);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 760) {
        this.view.buttonBurger.classList.remove('open');
      }
    });

    document.body.addEventListener('click', (event: PointerEvent) => {
      if (!this.isOpenBurger || window.innerWidth >= 760) {
        return;
      }

      const target = event.target;

      if (target instanceof HTMLElement) {
        if (!target.closest('.nav') && !target.closest('.burger')) {
          this.view.buttonBurger.classList.remove('open');
          this.isOpenBurger = false;
        }
      }
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (!this.isOpenBurger || window.innerWidth >= 760) {
        return;
      }

      if (event.key === 'Escape') {
        this.view.buttonBurger.classList.remove('open');
        this.isOpenBurger = false;
      }
    });
  }
}
