<script>
	import { recipes } from '@lib/store.js';
	import RecipeCard from '@components/RecipeCard.svelte';

	let newRecipeName = '';
	function addRecipe() {
		recipes.update((list) => [...list, newRecipeName]);
		newRecipeName = '';
	}

	let recipeList;

	const unsubscribe = recipes.subscribe((list) => {
		recipeList = list;
	});
</script>

<h1>My Recipes</h1>

<main>
	<form>
		<label
			>Recipe Name<input bind:value={newRecipeName} type="text" placeholder="eg. tacos" /></label
		>
		<button on:click={addRecipe}>Add {newRecipeName}</button>
	</form>
	<ul>
		{#each recipeList as recipe}
			<RecipeCard recipeName={recipe} />
		{/each}
	</ul>
</main>

<style>
	main {
		max-width: 320px;
		margin: 0 auto;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 5px;
		padding: 10px;
		border-radius: 8px;
	}

	ul {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		gap: 8px;
		padding: 0px;
		margin-top: 5px;
	}
</style>
