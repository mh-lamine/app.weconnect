<script>
    import "../app.css";
    import favicon from "$lib/assets/favicon.svg";
    import { pwaInfo } from 'virtual:pwa-info';
    
    let { children } = $props();
    const webManifestLink = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    {@html webManifestLink}
</svelte:head>

{@render children()}
