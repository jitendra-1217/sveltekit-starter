<script lang="ts">
	import '../app.css';
	import { ChevronDown } from 'lucide-svelte';
	import { page, navigating } from '$app/state';
	import { navItems, findActiveNavItem, type NavItem } from '$lib/menus';

	let { children } = $props();

	let selectedNav = $state<NavItem>(findActiveNavItem(page.url.pathname));

	$effect(() => {
		selectedNav = findActiveNavItem(page.url.pathname);
	});
</script>

<div class="navbar">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn">
				<svelte:component this={selectedNav.icon} />{selectedNav.name}<ChevronDown />
			</div>
			<ul tabindex="0" class="menu dropdown-content bg-base-100 z-1 w-3xs shadow-sm">
				{#each navItems as item}
					<li>
						<a href={item.href}>
							<svelte:component this={item.icon} />
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="navbar-center">
		<a href="/" class="btn">SvelteKit</a>
	</div>

	<div class="navbar-end"></div>

	{#if navigating.to}
		<div class="toast toast-start">
			<div class="alert">
				<span class="loading loading-bars loading-xs"></span>
				<span>Navigating</span>
			</div>
		</div>
	{/if}
</div>

<main class="flex-grow">
	{@render children()}
</main>
