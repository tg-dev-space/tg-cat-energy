interface ElementParameters {
  classNames?: string[];
  attributes?: Record<string, string>;
  content?: string;
  parent?: HTMLElement;
}

export const createElement = <T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  props?: ElementParameters
): HTMLElementTagNameMap[T] => {
  const element = document.createElement(tagName);

  if (!props) {
    return element;
  }

  const { classNames, attributes, content, parent } = props;

  if (classNames) {
    element.classList.add(...classNames);
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (content) {
    element.textContent = content;
  }

  if (parent) {
    parent.append(element);
  }

  return element;
};
