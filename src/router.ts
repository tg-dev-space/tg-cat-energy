import { ROUTES } from './constants/route';

export class Router {
  private onRouteChangeCallbacks: (() => void)[] = [];

  constructor(private readonly main: HTMLElement) {
    this.init();
  }

  public onRouteChange(callback: () => void): void {
    this.onRouteChangeCallbacks.push(callback);
  }

  public navigate = (event: Event): void => {
    event.preventDefault();

    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    const { pathname } = event.target;
    history.pushState({}, '', pathname);
    this.loadPage(pathname);
  };

  private loadPage(pathname: string): void {
    const Page = ROUTES[pathname] || ROUTES['/'];
    this.main.replaceChildren(new Page().render());
    this.onRouteChangeCallbacks.forEach((callback) => callback());
  }

  private init(): void {
    const pathname = window.location.pathname;

    if (!ROUTES[pathname]) {
      history.replaceState({}, '', '/');
      this.loadPage('/');
    } else {
      this.loadPage(pathname);
    }

    window.addEventListener('popstate', () => {
      window.scrollTo({ top: 0 });
      const pathname = window.location.pathname;

      this.loadPage(pathname);
    });
  }
}
