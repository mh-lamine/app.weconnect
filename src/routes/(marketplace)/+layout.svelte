<script>
	import { page } from "$app/state";
	import { dockItems } from "@/enums";

  	let { children } = $props();
</script>

<div class="drawer">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<header class="navbar bg-indigo-500 text-white w-full">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="mx-2 flex-1 px-2 text-xl font-medium tracking-wide">WeConnect</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal items-center">
					<!-- Navbar menu content here -->
					<li><a href="/salons">Nos salons</a></li>
					<li><a href="/about">À propos</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/q-&-a">FAQ</a></li>
					<li><a href="mailto:mlamins.ngom@gmail.com">Contact</a></li>
				</ul>
			</div>
		</header>
		<!-- Page content here -->
		{@render children()}
	</div>
	<div class="drawer-side z-50">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-indigo-100 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li>
				<a href="/" class="text-xl font-medium tracking-wide">WeConnect</a>
			</li>
			<li><a href="/salons">Nos salons</a></li>
			<li><a href="/about">À propos</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/q-&-a">FAQ</a></li>
			<li><a href="mailto:mlamins.ngom@gmail.com">Contact</a></li>
		</ul>
	</div>
</div>
<footer class="h-16"></footer>
<nav>
	<ul class="dock shadow-2xl shadow-indigo-950 bg-white z-40">
		{#each dockItems as item}
			<a
				href={item.path}
				class={['rounded-md hover:underline', page.url.pathname === item.path && 'bg-indigo-50']}
				><li>
					<item.icon class={page.url.pathname === item.path && 'text-indigo-500'} />
				</li>
			</a>
		{/each}
	</ul>
</nav>
