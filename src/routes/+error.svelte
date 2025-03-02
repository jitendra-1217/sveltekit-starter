<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">Error {page.status}</h1>

	<div class="card bg-base-100 shadow-sm">
		<div class="card-body p-4">
			<p class="mb-4">{page.error?.message || 'An unexpected error occurred'}</p>

			<div class="mt-4">
				<a href="/" class="btn btn-primary">Back to Home</a>
			</div>
		</div>
	</div>
</div>
