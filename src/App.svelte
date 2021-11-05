<script>
	import Navbar from "./Navbar.svelte";
	import AddTodo from "./AddTodo.svelte";
	import ToDo from "./ToDo.svelte";

	let todos = [
		{
			todo: "Go Shopping",
		},
		{
			todo: "Submit assignment",
		},
		{
			todo: "Finish Homework",
		},
	];
	const addTodo = (e) => {
		const newTodo = e.detail;
		todos = [...todos, newTodo];
	};
	const removeTodo = (e) => {
		todos = todos.filter((todo) => todo.todo !== e.detail);
	};
</script>

<Navbar />
<div class="container">
	<AddTodo on:addtodo={addTodo} />
	{#if todos.length === 0}
		<p>No Work Left!!</p>
	{:else}
		{#each todos as todo}
			<ToDo todo={todo.todo} on:removetodo={removeTodo} />
		{/each}
	{/if}
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
