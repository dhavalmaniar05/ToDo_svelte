<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	let todo = {
		todo: "",
	};
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch("addtodo", todo);
		todo = {
			todo: "",
		};
	};
</script>

<form on:submit={onSubmit}>
	<input type="text" placeholder="ToDo item" bind:value={todo.todo} />
	<input type="submit" class="btn btn-primary btn-sm" value="Add Player" />
</form>

<style>
	form {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
