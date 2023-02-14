import { writable } from 'svelte/store';
import { defaultRecipes } from './recipes';

export const recipes = writable(defaultRecipes);
