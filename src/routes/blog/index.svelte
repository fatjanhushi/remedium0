<script>
	export let posts
</script>

<h1>Blog page</h1>

{#each posts as post}
	<p>{post.title}</p>
{/each}
