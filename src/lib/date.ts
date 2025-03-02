export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
	const date = new Date(dateString);
	return date.toLocaleDateString(
		undefined,
		options || {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		}
	);
}
