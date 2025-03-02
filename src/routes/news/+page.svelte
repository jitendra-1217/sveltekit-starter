<script lang="ts">
  import { formatDate } from '$lib/date';

  let { data } = $props<{ data: { stories: any[] } }>();

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-6">Hacker News Top 25 Stories</h1>

  {#if !data.stories?.length}
    <div class="alert">No stories found</div>
  {:else}
    <ul class="space-y-4">
      {#each data.stories as s}
        <li class="card bg-base-100 shadow-sm p-4">
          <h2 class="text-lg font-semibold">
            <a href={s.url} target="_blank" rel="noopener noreferrer" class="hover:underline">
              {s.title}
            </a>
          </h2>

          <div class="flex flex-wrap gap-4 mt-2 text-sm opacity-70">
            <span>{s.score} points</span>
            <span>by {s.by}</span>
            {#if s.time}
              <span>{formatDate(new Date(s.time * 1000).toISOString())}</span>
            {/if}
            {#if s.descendants !== undefined}
              <span>{s.descendants} comments</span>
            {/if}
          </div>
        </li>
      {/each}
    </ul>

    <div class="flex justify-center mt-6">
      <button class="btn" onclick={toTop}>Back to Top</button>
    </div>
  {/if}
</div>
