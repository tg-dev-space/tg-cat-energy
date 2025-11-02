import { SLIDE_WIDTH_DESKTOP, SLIDE_WIDTH_MOBILE, SLIDER_CHANGE_WIDTH } from '../../../../constants/slider';

export default class SliderController {
  constructor(
    private readonly inputRange: HTMLInputElement,
    private readonly imageBefore: HTMLImageElement,
    private readonly imageAfter: HTMLImageElement
  ) {
    this.handleSlider();
  }

  private handleSlider(): void {
    this.inputRange.addEventListener('input', (event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement) {
        const value = this.inputRange.value;

        const width = window.innerWidth >= SLIDER_CHANGE_WIDTH ? SLIDE_WIDTH_DESKTOP : SLIDE_WIDTH_MOBILE;
        const clipValue = (width * parseFloat(value)) / 100;

        this.imageBefore.style.clipPath = `inset(0 ${clipValue}px 0 0)`;
        this.imageAfter.style.clipPath = `inset(0 0 0 ${width - clipValue}px)`;
      }
    });
  }
}
