<script>
	import Nav from './Nav.svelte'
</script>

<header>
	<div><img src="logo-Remedium.jpg" alt="Remedium Logo" /></div>
	<Nav />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 0;
	}
	header > div {
		border-radius: 1rem;
	}
	img {
		max-width: 100%;
	}
</style>
