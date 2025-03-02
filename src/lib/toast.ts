import { browser } from '$app/environment';

export enum ToastType {
	DEFAULT = 'default',
	INFO = 'info',
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error'
}

export type Toast = {
	id: string;
	type: ToastType;
	message: string;
};

let addToastFn: ((type: ToastType, message: string) => void) | null = null;

export function registerToasts(fn: (type: ToastType, message: string) => void): void {
	addToastFn = fn;
}

export const toast = {
	show: (type: ToastType, message: string): void => {
		if (!browser || !addToastFn) return;
		addToastFn(type, message);
	},
	default: (message: string): void => {
		if (!browser || !addToastFn) return;
		addToastFn(ToastType.DEFAULT, message);
	},
	info: (message: string): void => {
		if (!browser || !addToastFn) return;
		addToastFn(ToastType.INFO, message);
	},
	success: (message: string): void => {
		if (!browser || !addToastFn) return;
		addToastFn(ToastType.SUCCESS, message);
	},
	warning: (message: string): void => {
		if (!browser || !addToastFn) return;
		addToastFn(ToastType.WARNING, message);
	},
	error: (message: string): void => {
		if (!browser || !addToastFn) return;
		addToastFn(ToastType.ERROR, message);
	}
};
