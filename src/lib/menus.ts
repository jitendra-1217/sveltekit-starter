import { Home, Info, Newspaper, type Icon as IconType } from 'lucide-svelte';

export interface NavItem {
	name: string;
	href: string;
	icon: typeof IconType;
}

export const navItems: NavItem[] = [
	{ name: 'Home', href: '/', icon: Home },
	{ name: 'About', href: '/about', icon: Info },
	{ name: 'News', href: '/news', icon: Newspaper }
];

export const defaultSelectedNav: NavItem = navItems[0];

export function findActiveNavItem(pathname: string): NavItem {
	if (pathname === '/') {
		return navItems.find(item => item.href === '/') || defaultSelectedNav;
	}

	const matchingItems = navItems
		.filter(item => item.href !== '/' && pathname.startsWith(item.href))
		.sort((a, b) => b.href.length - a.href.length);

	return matchingItems[0] || defaultSelectedNav;
}
