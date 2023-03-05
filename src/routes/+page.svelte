<script>
	import { recipes } from '@lib/store.js';
	import ChosenRecipeCard from '@components/ChosenRecipeCard.svelte';
	import { shuffle } from '@lib/utils.js';
	import { get } from 'svelte/store';

	let chosenRecipes = [];
	function chooseRecipes() {
		chosenRecipes = shuffle(get(recipes));
	}
</script>

<h1>What's For Dinner?</h1>
<button on:click={chooseRecipes}>Give me my recipes, pls.</button>
<h2>This weeks meals are:</h2>
<ul>
	{#each chosenRecipes as recipe}
		<ChosenRecipeCard recipeName={recipe} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		width: 200px;
		gap: 5px;
		padding: 0px;
		margin-top: 5px;
	}
</style>
