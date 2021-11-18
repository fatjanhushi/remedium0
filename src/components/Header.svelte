<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<div><img src="logo-Remedium.jpg" alt="Remedium Logo" /></div>
	<Nav />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		background-color: white;
		text-align: center;
		padding: 0;
	}
	img {
		max-width: 100%;
	}
</style>
