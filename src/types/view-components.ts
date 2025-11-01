export interface CatalogItem {
  title: string;
  image: { src: string; alt: string };
  info: { label: string; value: string }[];
}
