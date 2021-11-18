<script>
	import Header from '../components/Header.svelte';
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
	<Header />
	<slot />
	<footer>
		<p>Footer</p>
	</footer>
</div>

<style>
	.container {
		max-width: 70rem;
		margin-inline: auto;
		background: red;
	}
	footer {
		background-color: blueviolet;
	}
</style>
