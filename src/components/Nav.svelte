<script>
	import { page } from '$app/stores'
</script>

<nav>
	<ul>
		<li class:selected={$page.url.pathname === '/'}><a href="/">Home</a></li>
		<li class:selected={$page.url.pathname === '/blog'}><a href="/blog">Blog</a></li>
		<li class:selected={$page.url.pathname === '/about'}><a href="/about">About</a></li>
	</ul>
</nav>

<style>
	:root {
		--selected-color: #dc3f4d;
		--color1: #3257a8;
		--color2: #37a794;
	}
	ul {
		background: #3257a8;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0.5rem 0;
		margin: 0;
		border-radius: 1rem;
	}
	ul > li {
		margin-inline: 1rem;
		border-radius: 1rem;
	}

	ul > li:hover,
	ul > li:active {
		cursor: pointer;
		background-color: #37a794;
		border-radius: 1rem;
	}

	a {
		display: block;
		color: #fff;
		font-weight: 500;
		letter-spacing: 0.2em;
		padding: 0.5rem 1.5rem;
		text-align: center;
		text-decoration: none;
		text-shadow: #333 1px 1px;
		border-radius: 1rem;
	}

	a:hover,
	a:active {
		box-shadow: 1px 1px 1px #333;
	}

	.selected {
		background-color: #37a794;
	}
</style>
