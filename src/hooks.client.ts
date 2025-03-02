import { ulid } from 'ulid';

const originalFetch = window.fetch;
window.fetch = function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
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
