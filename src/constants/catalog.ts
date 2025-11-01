import { CatalogItem } from '../types/view-components';
import chicken from '../assets/images/catalog-chicken.png';
import fish from '../assets/images/catalog-fish.png';
import buckwheat from '../assets/images/catalog-buckwheat.png';
import rice from '../assets/images/catalog-rice.png';

export const CATALOG: CatalogItem[] = [
  {
    title: 'Cat Energy PRO 500 г',
    image: {
      src: chicken,
      alt: 'Cat Energy PRO 500 г',
    },
    info: [
      {
        label: 'Масса',
        value: '500 г',
      },
      {
        label: 'Вкус',
        value: 'Курица',
      },
      {
        label: 'Цена',
        value: '700 Р.',
      },
    ],
  },
  {
    title: 'Cat Energy PRO 1000 г',
    image: {
      src: chicken,
      alt: 'Cat Energy PRO 1000 г',
    },
    info: [
      {
        label: 'Масса',
        value: '1000 г',
      },
      {
        label: 'Вкус',
        value: 'Курица',
      },
      {
        label: 'Цена',
        value: '1000 Р.',
      },
    ],
  },
  {
    title: 'Cat Energy PRO 500 г',
    image: {
      src: fish,
      alt: 'Cat Energy PRO 500 г',
    },
    info: [
      {
        label: 'Масса',
        value: '500 г',
      },
      {
        label: 'Вкус',
        value: 'Рыба',
      },
      {
        label: 'Цена',
        value: '700 Р.',
      },
    ],
  },
  {
    title: 'Cat Energy PRO 1000 г',
    image: {
      src: fish,
      alt: 'Cat Energy PRO 1000 г',
    },
    info: [
      {
        label: 'Масса',
        value: '1000 г',
      },
      {
        label: 'Вкус',
        value: 'Рыба',
      },
      {
        label: 'Цена',
        value: '1000 Р.',
      },
    ],
  },
  {
    title: 'Cat Energy PRO 500 г',
    image: {
      src: buckwheat,
      alt: 'Cat Energy PRO 500 г',
    },
    info: [
      {
        label: 'Масса',
        value: '500 г',
      },
      {
        label: 'Вкус',
        value: 'Гречка',
      },
      {
        label: 'Цена',
        value: '700 Р.',
      },
    ],
  },
  {
    title: 'Cat Energy PRO 1000 г',
    image: {
      src: buckwheat,
      alt: 'Cat Energy PRO 1000 г',
    },
    info: [
      {
        label: 'Масса',
        value: '1000 г',
      },
      {
        label: 'Вкус',
        value: 'Гречка',
      },
      {
        label: 'Цена',
        value: '1000 Р.',
      },
    ],
  },
  {
    title: 'Cat Energy PRO 500 г',
    image: {
      src: rice,
      alt: 'Cat Energy PRO 500 г',
    },
    info: [
      {
        label: 'Масса',
        value: '500 г',
      },
      {
        label: 'Вкус',
        value: 'Рис',
      },
      {
        label: 'Цена',
        value: '700 Р.',
      },
    ],
  },
];
