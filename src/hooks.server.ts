import { ulid } from 'ulid';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const originalFetch = event.fetch;

	event.fetch = function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
		const requestId = ulid();
		const enhancedInit: RequestInit = { ...init };

		if (!enhancedInit.headers) {
			enhancedInit.headers = {};
		}

		const headers =
			enhancedInit.headers instanceof Headers
				? enhancedInit.headers
				: new Headers(enhancedInit.headers as HeadersInit);

		headers.set('X-Request-Id', requestId);
		enhancedInit.headers = headers;

		return originalFetch(input, enhancedInit);
	};

	return resolve(event);
};
