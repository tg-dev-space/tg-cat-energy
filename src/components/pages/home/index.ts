import { createElement } from '../../../utils/create-element';
import HeroView from './view/hero-view';
import NutritionProgramsView from './view/nutrition-programs';
import ResultsView from './view/results';
import StepsView from './view/steps';

export default class HomePage {
  private readonly heroView: HeroView;
  private readonly nutritionProgramsView: NutritionProgramsView;
  private readonly stepsView: StepsView;
  private readonly resultsView: ResultsView;

  constructor() {
    this.heroView = new HeroView();
    this.nutritionProgramsView = new NutritionProgramsView();
    this.stepsView = new StepsView();
    this.resultsView = new ResultsView();
  }

  public render(): HTMLElement {
    const main = createElement('main');

    const heroSections = this.heroView.render();
    const nutritionProgramsSections = this.nutritionProgramsView.render();
    const stepsSections = this.stepsView.render();
    const resultsView = this.resultsView.render();

    main.append(heroSections, nutritionProgramsSections, stepsSections, resultsView);

    return main;
  }
}
