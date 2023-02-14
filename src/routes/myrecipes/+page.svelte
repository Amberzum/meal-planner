<script>
	import { recipes } from '@lib/store.js';

	let newRecipeName = '';
	function addRecipe() {
		recipes.update((list) => [...list, newRecipeName]);
	}

	let recipeList;

	const unsubscribe = recipes.subscribe((list) => {
		recipeList = list;
	});
</script>

<a href="/">Home</a>
<h1>My Recipes</h1>
<form>
	<label>Recipe Name<input bind:value={newRecipeName} type="text" placeholder="eg. tacos" /></label>
	<button on:click={addRecipe}>Add {newRecipeName}</button>
</form>
<main>
	<ul>
		{#each recipeList as recipe}
			<li>{recipe}</li>
		{/each}
	</ul>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 5px;
		max-width: 200px;
		margin: 0 auto;
		background: antiquewhite;
		padding: 10px;
		border-radius: 8px;
	}
	input {
		display: block;
		padding: 2px;
		margin-top: 5px;
	}
	button {
		max-width: 200px;
	}

	ul {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		width: 200px;
		gap: 5px;
		padding: 0px;
		margin-top: 5px;
	}

	li {
		list-style: none;
		padding: 3px;
		background: antiquewhite;
		border-radius: 3px;
	}
</style>
