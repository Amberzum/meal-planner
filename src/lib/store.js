import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { defaultRecipes } from './recipes';

export const recipes = writable([]);
