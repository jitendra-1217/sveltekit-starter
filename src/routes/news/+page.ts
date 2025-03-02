import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Story } from '$lib/types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');

		if (!res.ok) {
			error(500, `Failed to fetch stories: ${res.statusText}`);
		}

		const ids = await res.json();
		const top15 = ids.slice(0, 15);

		const promises = top15.map((id: number) =>
			fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) => r.json())
		);

		const stories: Story[] = await Promise.all(promises);

		return { stories };
	} catch {
		error(500, 'Failed to load stories');
	}
};
