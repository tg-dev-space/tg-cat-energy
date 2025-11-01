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
