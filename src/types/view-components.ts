export interface CatalogItem {
  title: string;
  image: { src: string; alt: string };
  info: { label: string; value: string }[];
}

export interface CatalogItemAdditional {
  label: string;
  quantity: string;
  price: string;
}

export interface FormElements {
  [name: string]: HTMLInputElement | HTMLTextAreaElement;
}

export interface InputContent {
  id: keyof FormElements;
  label: string;
  labelAttributes: Record<string, string>;
  inputAttributes: Record<string, string>;
  wrapperClassNames?: string[];
}
