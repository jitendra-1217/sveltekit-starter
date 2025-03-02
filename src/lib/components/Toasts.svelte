<script lang="ts">
	import { AlertTriangle, CheckCircle, Info, X } from 'lucide-svelte';
	import { ToastType, registerToasts, type Toast } from '$lib/toast';
	import { onMount } from 'svelte';

	let toasts = $state<Toast[]>([]);

	onMount(() => {
		registerToasts((type, message) => {
			const id = crypto.randomUUID();
			toasts = [...toasts, { id, type, message }];

			setTimeout(() => {
				toasts = toasts.filter((t) => t.id !== id);
			}, 5000);
		});
	});

	function removeToast(id: string): void {
		toasts = toasts.filter((toast) => toast.id !== id);
	}
</script>

{#if toasts.length > 0}
	<div class="toast toast-start z-50">
		{#each toasts as toast (toast.id)}
			<div
				class="alert alert-{toast.type === ToastType.DEFAULT
					? ''
					: toast.type} flex items-center justify-between"
			>
				<div class="flex items-center gap-2">
					{#if toast.type === ToastType.INFO || toast.type === ToastType.DEFAULT}
						<Info />
					{:else if toast.type === ToastType.SUCCESS}
						<CheckCircle />
					{:else if toast.type === ToastType.WARNING || toast.type === ToastType.ERROR}
						<AlertTriangle />
					{/if}
					<span>{toast.message}</span>
				</div>
				<button class="btn btn-ghost btn-xs" onclick={() => removeToast(toast.id)}>
					<X />
				</button>
			</div>
		{/each}
	</div>
{/if}
