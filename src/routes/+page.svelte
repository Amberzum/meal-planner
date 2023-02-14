<script>
	import { recipes } from '@lib/store.js';

	let recipeList;

	const unsubscribe = recipes.subscribe((list) => {
		recipeList = list;
	});

	let chosenRecipes = [];
	function chooseRecipes() {
		chosenRecipes = [];
		for (let i = 0; i < 5; i++) {
			let rand = Math.floor(Math.random() * 7);
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
		<li>{recipe}</li>
	{/each}
</ul>

<style>
</style>
