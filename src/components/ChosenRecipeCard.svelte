<script>
	export let recipeName = 'untitled recipe';
</script>

<li>{recipeName}</li>

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
</style>
