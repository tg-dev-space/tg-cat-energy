import Footer from './components/footer';
import Header from './components/header';
import { Router } from './router';
import { createElement } from './utils/create-element';

class App {
  public readonly route: Router;
  public readonly main: HTMLElement;

  constructor() {
    this.main = createElement('main');
    this.route = new Router(this.main);
  }

  public build(): void {
    const header = new Header().render();
    const footer = new Footer().render();

    document.body.append(header, this.main, footer);
  }
}

const app: App = new App();
export const route = app.route;

app.build();
