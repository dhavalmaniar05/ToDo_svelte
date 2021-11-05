<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	export let todo;
	const onDelete = () => {
		dispatch("removetodo", todo);
	};
</script>

<div class="card" style="width: 50%;">
	<h3>
		{todo}
		<button
			class="btn btn-danger btn-sm"
			on:click={onDelete}
			style="float: right;">x</button
		>
	</h3>
</div>
