<script>
	export let recipeName = 'untitled recipe';
	import { recipes } from '@lib/store.js';

	let recipeList;

	const unsubscribe = recipes.subscribe((list) => {
		recipeList = list;
	});

	function deleteRecipe() {
		const newRecipes = recipeList.filter((r) => recipeName !== r);

		recipes.update(() => [...newRecipes]);
	}
</script>

<li>{recipeName}<button on:click={deleteRecipe}>X</button></li>

<style>
	li {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style: none;
		padding: 3px;
		background-color: var(--color-secondary);
		border-radius: 3px;
	}

	button {
		background-color: transparent;
		color: var(--color-primary);
	}

	button:hover {
		color: #588980;
		cursor: pointer;
	}
</style>
