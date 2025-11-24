<script>
	import { ArrowLeft } from "@lucide/svelte";
    let { children } = $props();
</script>

<div class="bg-indigo-600 flex gap-4 mx-auto px-4 py-3 text-white">
	<ArrowLeft /> <a href="/">Retour à l'accueil</a>
</div>

{@render children()}
