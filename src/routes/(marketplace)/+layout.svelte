<script>
	import { page } from '$app/state';
	import { dockItems } from '@/enums';
	import { Bell, Menu, Search } from '@lucide/svelte';

	let { children } = $props();
</script>

<div class="navbar bg-white shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<Menu />
			</div>
			<ul
				tabindex="-1"
				class="menu dropdown-content bg-indigo-50 rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				<li><a>Homepage</a></li>
				<li><a>Portfolio</a></li>
				<li><a>About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost text-lg uppercase tracking-wider">WeConnect</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
			<Search />
		</button>
		<button class="btn btn-ghost btn-circle">
			<div class="indicator">
				<Bell />
				<span class="badge badge-xs badge-primary indicator-item"></span>
			</div>
		</button>
	</div>
</div>
{@render children()}

<footer class="h-16">
	<nav class="dock dock-xl shadow-2xl shadow-indigo-950">
		{#each dockItems as item}
			<a href={item.path} class={page.url.pathname === item.path && 'dock-active text-indigo-600'}>
				<item.icon  color={page.url.pathname === item.path ? '#4f39f6' : "#000"} />
				<span class={"dock-label text-base"}>{item.label}</span>
			</a>
		{/each}
	</nav>
</footer>
