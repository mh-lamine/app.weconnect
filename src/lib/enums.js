import { Home, Store, UserRoundCog } from '@lucide/svelte';

export const dockItems = [
	{
		path: '/',
		icon: Home,
		label: 'Home'
	},
	{
		path: '/salons',
		icon: Store,
		label: 'Salons'
	},
	{
		path: '/settings',
		icon: UserRoundCog,
		label: 'Settings'
	}
];
