<script>
	import { onMount } from 'svelte';
	import { recipes } from '@lib/store';
	import Header from '@components/Header.svelte';

	onMount(() => {
		const storedRecipes = localStorage.getItem('recipes');

		console.log(typeof JSON.parse(storedRecipes));
		recipes.subscribe((value) => {
			console.log('in subscribe function. value of store is ', value);
			if (value?.length === 0) {
				console.log('recipes store is empty. using localstorage values instead');
				recipes.set(JSON.parse(storedRecipes));
			} else {
				console.log('recipes is store is not empty, so updating localstorage');
				localStorage.setItem('recipes', JSON.stringify(value));
			}
		});
	});
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		padding: 16px;
	}
</style>
