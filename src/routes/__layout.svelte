<script>
	import Header from '$lib/header/Header.svelte'
	import '../app.css'
</script>

<div class="container">
	<Header />
	<slot />
	<footer>
		<p>&copy Copyright {new Date().getFullYear()}</p>
	</footer>
</div>

<style>
	.container {
		max-width: 70rem;
		margin-inline: auto;
	}
	footer {
		background-color: #3257a8;
		color: #fff;
		font-weight: 500;
		letter-spacing: 0.2em;
		text-align: center;
		border-radius: 1rem;
	}
</style>
