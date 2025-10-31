import Footer from './components/footer';
import Header from './components/header';
import HomePage from './components/pages/home';

export default class App {
  constructor() {}

  public build(): void {
    const header = new Header().render();
    const homePage = new HomePage().render();
    const footer = new Footer().render();

    document.body.append(header, homePage, footer);
  }
}
