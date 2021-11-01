<script>
	import Header from '../components/Header.svelte';
</script>

<div class="container">
	<Header />
	<slot />
</div>

<style>
	.container {
		max-width: 70rem;
		margin-inline: auto;
		background: red;
	}
</style>
