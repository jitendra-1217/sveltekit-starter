<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
<div class="navbar">
	<div class="navbar-start"></div>
	<div class="navbar-center">
		<a href="/" class="text-xl font-bold">SvelteKit</a>
	</div>
	<div class="navbar-end"></div>
</div>

	<main class="flex-grow">
		{@render children()}
	</main>
</div>
