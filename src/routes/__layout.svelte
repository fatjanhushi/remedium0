<script>
	import Header from '../components/Header.svelte'
	export let titulli
</script>

<svelte:head>
	<title>{titulli}</title>
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
