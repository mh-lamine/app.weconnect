import { CircleUserRound, Home, MapPin, Store, UserRoundCog } from '@lucide/svelte';

export const dockItems = [
	{
		path: '/',
		icon: Home,
		label: 'Home'
	},
	{
		path: '/salons',
		icon: MapPin,
		label: 'Salons'
	},
	{
		path: '/settings',
		icon: CircleUserRound,
		label: 'Settings'
	}
];
