<script lang="ts">
	import { formatDate } from '$lib/date';
	import type { Story } from '$lib/types';

	let { data } = $props<{ data: { stories: Story[] } }>();
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">Hacker News Top 5 Stories</h1>

	{#if !data.stories?.length}
		<div class="alert">No stories found</div>
	{:else}
		<ul class="space-y-4">
			{#each data.stories as s (s.id)}
				<li class="card bg-base-100 shadow-sm">
					<div class="card-body p-4">
						<h2 class="card-title">
							<a href={s.url} target="_blank" rel="noopener noreferrer" class="hover:underline">
								{s.title}
							</a>
						</h2>

						<div class="flex flex-wrap gap-2 text-sm opacity-70">
							<span>{s.score} Points</span>
							<span
								>By <a
									href={`https://news.ycombinator.com/user?id=${s.by}`}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:underline">{s.by}</a
								></span
							>
							{#if s.time}
								<span>{formatDate(new Date(s.time * 1000).toISOString())}</span>
							{/if}
							{#if s.descendants !== undefined}
								<span
									><a
										href={`https://news.ycombinator.com/item?id=${s.id}`}
										target="_blank"
										rel="noopener noreferrer"
										class="hover:underline">{s.descendants} Comments</a
									></span
								>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
