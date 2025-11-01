import CatalogPage from '../components/pages/catalog';
import HomePage from '../components/pages/home';
import ProgramsPage from '../components/pages/programs';
import { Routes } from '../types/router';

export const ROUTES: Routes = {
  '/': HomePage,
  '/catalog': CatalogPage,
  '/programs': ProgramsPage,
};
