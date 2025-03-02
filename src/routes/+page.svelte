<script lang="ts">
	let { data } = $props<{ data: { quote: { q: string; a: string; h: string } | null } }>();
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">Welcome to SvelteKit</h1>

	<div class="space-y-4">
		<div class="card bg-base-100 shadow-sm">
			<div class="card-body p-4">
				<p>
					Visit <a
						href="https://svelte.dev/docs/kit"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline">svelte.dev/docs/kit</a
					> to read the documentation
				</p>
			</div>
		</div>

		{#if data.quote}
			<div class="card bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<h2 class="card-title">Quote of the Day</h2>
					<div class="flex flex-col gap-2">
						<p class="font-serif text-xl">{data.quote.q}</p>
						<p class="text-sm">{data.quote.a}</p>
					</div>
				</div>
			</div>
		{:else}
			<div class="card bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<h2 class="card-title">Quote of the Day</h2>
					<div class="flex flex-col gap-2">
						<p>Unable to fetch quote at the moment.</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
