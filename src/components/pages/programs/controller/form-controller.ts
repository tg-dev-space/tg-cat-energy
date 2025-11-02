export default class FormController {
  constructor(private readonly form: HTMLElement) {
    this.handleSubmit();
  }

  private handleSubmit(): void {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }
}
