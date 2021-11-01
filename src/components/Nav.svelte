<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li class:selected={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:selected={$page.path === '/blog'}><a sveltekit:prefetch href="/blog">Blog</a></li>
		<li class:selected={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
	</ul>
</nav>

<style>
	:root {
		--selected-color: magenta;
	}
	ul {
		background: yellow;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1rem 0;
		margin: 0;
	}
	ul > li {
		margin-inline: 0.5rem;
	}

	ul > li:hover,
	ul > li:active {
		cursor: pointer;
		background-color: var(--selected-color);
	}

	a {
		display: block;
		padding: 0.5rem;
		margin-inline: 1rem;
		text-align: center;
		text-decoration: none;
	}

	a,
	a:hover,
	a:active {
		color: #333;
	}

	.selected {
		background-color: var(--selected-color);
	}
</style>
