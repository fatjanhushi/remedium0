<script>
	import Header from '../components/Header.svelte';
</script>

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
