interface Attributes {
  [key: string]: string;
}

interface ElementParameters {
  classNames?: string[];
  attributes?: Attributes;
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
      if (value) {
        element.setAttribute(key, value);
      }
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
