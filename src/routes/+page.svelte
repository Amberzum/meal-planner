<script>
	import { recipes } from '@lib/store.js';
	import ChosenRecipeCard from '@components/ChosenRecipeCard.svelte';

	let recipeList;

	const unsubscribe = recipes.subscribe((list) => {
		recipeList = list;
	});

	let chosenRecipes = [];
	function chooseRecipes() {
		chosenRecipes = [];
		for (let i = 0; i < 5; i++) {
			let rand = Math.floor(Math.random() * recipeList.length);
			chosenRecipes.push(recipeList[rand]);
			chosenRecipes = chosenRecipes;
		}
	}
</script>

<a href="/myrecipes">My Recipes</a>
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
